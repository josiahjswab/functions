const express = require('express')
const app = express()
var path = require('path');
const port = 3003
const { MongoClient } = require('mongodb');
require('dotenv').config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.use(express.static('dist'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'));
  });
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
