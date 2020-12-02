import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });

const run = async () => {
    console.log('creating index');
    const response = await client.indices.create({
        index: 'movie',
        body: {
            mappings: {
                properties: {
                    title: { type: 'text' },
                    tag: { type: 'text' },
                    year: { type: 'integer' }
                }
            }
        },
    });

    console.log('created', response);
};

run().catch(console.log);
