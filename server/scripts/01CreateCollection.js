const mongo = require('../mongo-connector');

async function main() {
  // Use connect method to connect to the server
  await mongo.client.connect();
  console.log('Connected successfully to server');
  const db = mongo.client.db(mongo.dbName);
  db.createCollection("TeamsMessages", function(err, db) {
    if (err) throw err;
    console.log(">>> completed creating collection <<<");
    mongo.client.close();
  })
}

main().then(console.log);
