import { ApiResponse, Client, RequestParams } from '@elastic/elasticsearch';

export type InsertElasticSearchResult<T> = Promise<ApiResponse<Record<string, T>, Record<string, unknown>>>

export const insertIntoElasticSearch = async <T>(client: Client, movie: T): InsertElasticSearchResult<T> => {
    const genericRequest: RequestParams.Index<T> = {
        index: 'movie',
        body: movie,
    };
    return await client.index(genericRequest);
};
