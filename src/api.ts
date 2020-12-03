
import { Client } from '@elastic/elasticsearch';
import express from 'express';
import { searchElasticsearch } from './elasticsearch/search';
import { Movie } from './movie';

const app = express();
const port = 8080;

const esHost = process.env.ELASTICSEARCH_HOSTS || 'http://localhost:9200';
const client = new Client({ node: esHost });

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

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

