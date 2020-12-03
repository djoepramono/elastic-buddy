# Elastic Buddy

## Development

```
./scripts/run-dependencies  # to run dependencies
./scripts/run               # to run the main dev image
npm run build               # to compile typescript files
node dist/api.js            # to run compiled script, e.g. API server
```

# Useful links

- [Elastic Search docs](./docs/ELASTICSEARCH.md)

## Gotcha
You need to bump up your vm memory

```
sudo sysctl -w vm.max_map_count=262144
```
