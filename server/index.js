const express = require('express')
const app = express();
var path = require('path');
const mongo = require('./mongo-connector');
const port = 3003

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/getTM', (req, res) => {
  async function main() {
    // Use connect method to connect to the server
    await mongo.client.connect();
    console.log('Connected successfully to server');
    const db = mongo.client.db(mongo.dbName);
    const collection = db.collection('shipwrecks');
  
    let boo = await collection.find({latdec: 9.3418808}).toArray();
    return boo;
  }
  main()  
    .then((data) => res.send(data))
    .catch(console.error)
    .finally(() => mongo.client.close())
  
})

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
