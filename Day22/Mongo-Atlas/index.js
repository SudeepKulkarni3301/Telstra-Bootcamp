const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const port = 3000;
const app = express();

app.use(bodyParser.json());
//const url = "mongodb://localhost:27017";
// const dbName = "mydatabase";

// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error("Error connecting to MongoDB:", err);
//     return;
//   }
//   console.log("Connected to MongoDB successfully");
//   const db = client.db(dbName);
//   const collection = db.collection("mycollection");
// });

//const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient(
    "mongodb://127.0.0.1:27017/test?socketTimeoutMS=90000"
  );

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("vidly");
    const collection = db.collection("customers");

    const document = {
      name: "Sudeep kulkarni",
      age: 22,
      email: "sudeep@example.com",
    };
    const result = await collection.insertOne(document);

    console.log("Document inserted successfully", result.ops);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

main();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
