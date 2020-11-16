import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });

// Define the type of the body for the Search request
interface SearchBody {
    query: {
      match: { title: string }
    }
}

// Complete definition of the Search response
interface ShardsResponse {
    total: number;
    successful: number;
    failed: number;
    skipped: number;
}

interface Explanation {
    value: number;
    description: string;
    details: Explanation[];
}

interface SearchResponse<T> {
    took: number;
    timed_out: boolean;
    _scroll_id?: string;
    _shards: ShardsResponse;
    hits: {
      total: number;
      max_score: number;
      hits: Array<{
        _index: string;
        _type: string;
        _id: string;
        _score: number;
        _source: T;
        _version?: number;
        _explanation?: Explanation;
        fields?: any;
        highlight?: any;
        inner_hits?: any;
        matched_queries?: string[];
        sort?: string[];
      }>;
    };
    aggregations?: any;
}

// Define the interface of the source object
interface Source {
    title: string
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
    console.log(response.body.hits.hits[0]._source);
};

run().catch(console.log);
