# Kibana

Kibana can be accessed from this [url](http://localhost:5601/app/dev_tools#/console)

Start a `movie` index

```
PUT /movie
{
  "settings": {
    "index": {
      "number_of_shards": 1,
      "number_of_replicas": 1
    },
    "analysis": {
      "analyzer": {
        "analyzer-title": {
          "type": "custom",
          "tokenizer": "keyword",
          "filter": "lowercase"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "analyzer": "analyzer-title"
      },
      "year": {
        "type": "long"
      },
      "tag": {
        "type": "text"
      }
    }
  }
}
```

Put some documents

```
PUT /movie/_doc/1
{
  "title": "Iron Man",
  "year": 2000,
  "tag": "action"
}
```

Retrieve the document

```
GET /movie/_doc/1
```

Search the document

```
GET /movie/_search
{
  "query": {
    "match": {
      "title": "Iron Man"
    }
  }
}
```
