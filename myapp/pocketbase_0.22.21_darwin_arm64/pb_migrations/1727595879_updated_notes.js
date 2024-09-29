/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g6ubm9kyu18f5tr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyrhisjv",
    "name": "deadline",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g6ubm9kyu18f5tr")

  // remove
  collection.schema.removeField("wyrhisjv")

  return dao.saveCollection(collection)
})
