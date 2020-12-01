# Elastic Buddy

## How to build

```
npm run build
```

## How to run

```
docker-compose up
```

# Useful links

- [Elastic Search docs](./docs/ELASTICSEARCH.md)

## Gotcha
You need to bump up your vm memory

```
sudo sysctl -w vm.max_map_count=262144
```
