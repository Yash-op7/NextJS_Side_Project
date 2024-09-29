/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g6ubm9kyu18f5tr",
    "created": "2024-09-29 06:27:59.553Z",
    "updated": "2024-09-29 06:27:59.553Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dfocujru",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ifmr2qsc",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g6ubm9kyu18f5tr");

  return dao.deleteCollection(collection);
})
