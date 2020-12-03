import { ApiResponse, Client } from '@elastic/elasticsearch';
import { SearchResponse } from 'elasticsearch';
import { Movie } from '../movie';

type SearchElasticSearch<T> = (c: Client, s: string) => Promise<ApiResponse<SearchResponse<T>, Record<string, unknown>>>

interface SearchBody {
  query: {
    match: { title: string }
  }
}

export const searchElasticsearch: SearchElasticSearch<Movie> = async (client, searchString) => {
    const response = await client.search<SearchResponse<Movie>, SearchBody>({
        index: 'movie',
        body: {
            query: {
                match: {
                    title: searchString,
                },
            },
        },
    });

    return response;
};
