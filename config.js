var schemaFilterGenerator =
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type": "object",
  "properties": {
    "category": {},
    "name": {
      "type": "string",
      "minLength": 1
    },
    "projectId": {
      "type": "string",
      "minLength": 1
    },
    "properties": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1
        },
        "path": {
          "type": "string",
          "minLength": 1
        },
        "referrer": {
          "type": "string"
        },
        "search": {
          "type": "string"
        },
        "title": {
          "type": "string",
          "minLength": 1
        },
        "url": {
          "type": "string",
          "minLength": 1
        }
      },
      "required": [
        "name",
        "path",
        "referrer",
        "search",
        "title",
        "url"
      ]
    },
    "type": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "name",
    "projectId",
    "properties",
    "type"
  ]
}
