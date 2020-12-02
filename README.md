# Elastic Buddy

## Development

```
./scripts/build-dev-image # this is to build the docker dev image
./scripts/run
```

# Useful links

- [Elastic Search docs](./docs/ELASTICSEARCH.md)

## Gotcha
You need to bump up your vm memory

```
sudo sysctl -w vm.max_map_count=262144
```
