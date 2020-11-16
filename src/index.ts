import { Client } from '@elastic/elasticsearch';
import { SearchResponse } from 'elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });

// Define the type of the body for the Search request
interface SearchBody {
    query: {
      match: { title: string }
    }
}

interface Source {
    title: string,
    year: number,
    tag: string
}

const run = async () => {
    console.log('dsds');
    const response = await client.search<SearchResponse<Source>, SearchBody>({
        index: 'movie',
        body: {
            query: {
                match: {
                    title: 'Iron Man',
                },
            },
        },
    });
    const firstResult = (response.body.hits.hits[0]._source);
    console.log(`Found ${firstResult.title} from ${firstResult.year}`);
};

run().catch(console.log);
