import { Client, RequestParams } from '@elastic/elasticsearch';
import { Movie } from './movie';

const esHost = process.env.ELASTICSEARCH_HOSTS || 'http://localhost:9200';
const client = new Client({ node: esHost });

const run = async () => {
    console.log('putting record');
    const movieRequest: RequestParams.Index<Movie> = {
        index: 'movie',
        body: {
            tag: 'action',
            title: 'Spiderman',
            year: 2020
        },
    };
    const response = await client.index(movieRequest);

    console.log('Put record', response);
};

run().catch(console.log);
