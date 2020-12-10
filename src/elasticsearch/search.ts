import { ApiResponse, Client } from '@elastic/elasticsearch';
import { SearchResponse } from 'elasticsearch';

type SearchElasticSearchResult<T> = Promise<ApiResponse<SearchResponse<T>, Record<string, unknown>>>

interface SearchBody {
  query: {
    match: { title: string }
  }
}

export const searchElasticsearch = async <T>(client: Client, searchString: string): SearchElasticSearchResult<T> => {
    const response = await client.search<SearchResponse<T>, SearchBody>({
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
