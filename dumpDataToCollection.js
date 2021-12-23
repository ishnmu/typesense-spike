const fs = require("fs/promises");
const client = require("./client");

fs.readFile("./data/books.jsonl").then((books) => {
  client
    .collections("books")
    .documents()
    .import(books, {
      batch_size: 100,
    })
    .then((data) => {
      console.log("inserted: ", { data });
    })
    .catch((error) => {
      console.error("error on dumping books into collections: ", { error });
    });
});
