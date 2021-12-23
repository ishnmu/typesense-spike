const client = require("./client");

const collection = "books";

const searchParams = {
  q: "harry potter",
  query_by: "title",
  sort_by: "ratings_count:desc",
};

client
  .collections(collection)
  .documents()
  .search(searchParams)
  .then((data) => {
    console.log("search results: ", { data: JSON.stringify(data, null, 4) });
  })
  .catch((error) => {
    console.error("error on search: ", { error });
  })
  .finally(() => {
    console.log("done");
  });
