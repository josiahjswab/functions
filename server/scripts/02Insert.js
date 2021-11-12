const mongo = require('../mongo-connector');

async function main() {
  // Use connect method to connect to the server
  await mongo.client.connect();
  console.log('Connected successfully to server');
  const db = mongo.client.db(mongo.dbName);
  const collection = db.collection('TeamsMessages')

  await collection.insertOne({item: "Test Item"});
  return "completed"
}

main().then(console.log);

