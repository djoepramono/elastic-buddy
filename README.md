# Elastic Buddy

## How to build

```
npm run build
```

## How to run

```
docker compose up
```

## Gotcha
You need to bump up your vm memory

```
sudo sysctl -w vm.max_map_count=262144
```
