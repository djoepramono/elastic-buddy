
import { Client } from '@elastic/elasticsearch';
import express from 'express';
import { searchElasticsearch } from './elasticsearch/search';
import { isMovie, Movie } from './movie';
import { ErrorOr, isError } from './core-lib';
import { insertIntoElasticSearch } from './elasticsearch/insert';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

const esHost = process.env.ELASTICSEARCH_HOSTS || 'http://localhost:9200';
const client = new Client({ node: esHost });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get( '/', ( req, res ) => {
    res.send( 'Welcome to Elastic Buddy!' );
} );


app.get('/search/:title', async (req, res) => {
    const searchedTitle = req.params.title;
    const response = await searchElasticsearch<Movie>(client, searchedTitle);
    const firstResult = (response.body.hits.hits[0]._source);
    console.log(firstResult);
    res.send(`The first search result for ${searchedTitle} is ${firstResult.title} from year ${firstResult.year}`);
});

const safeJSONParse = (input: string): ErrorOr<Movie> => {
    try {
        const parseResult = JSON.parse(input);
        return isMovie(parseResult) ? parseResult : new Error(`parsing wrong type: ${input}`);
    } catch(e) {
        console.log('parse error');
        return new Error(`parsing error: ${input}`);
    }
};

app.post('/insert', async (req, res) => {
    console.log('called');
    console.log(req.body);
    const errorOrMovie = safeJSONParse(req.body);
    console.log(errorOrMovie);

    const response = isError(errorOrMovie) ? errorOrMovie : await insertIntoElasticSearch<Movie>(client, errorOrMovie);
    res.send(response);
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

