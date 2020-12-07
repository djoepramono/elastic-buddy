import { Client } from '@elastic/elasticsearch';
import { SearchResponse } from 'elasticsearch';
import { Movie } from './movie';

const esHost = process.env.ELASTICSEARCH_HOSTS || 'http://localhost:9200';
const client = new Client({ node: esHost });

// Define the type of the body for the Search request
interface SearchBody {
    query: {
      match: { title: string }
    }
}

const run = async () => {
    console.log('searching index');
    const response = await client.search<SearchResponse<Movie>, SearchBody>({
        index: 'movie',
        body: {
            query: {
                match: {
                    title: 'Spiderman',
                },
            },
        },
    });
    const firstResult = (response.body.hits.hits[0]._source);
    console.log(`Found ${firstResult.title} from ${firstResult.year}`);
};

run().catch(console.log);
