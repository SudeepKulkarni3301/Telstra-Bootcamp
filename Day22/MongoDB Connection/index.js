const { MongoClient } = require("mongodb");

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
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
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
