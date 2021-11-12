const { MongoClient } = require('mongodb');
require('dotenv').config();

// const url = process.env.MONGODB_CONNECTION_STRING;
const url = "mongodb+srv://josiahjswab:Agoodmanwaitshereforadrink@cluster0.55wle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(url);

const dbName = 'sample_geospatial';

module.exports = {
  client,
  dbName
}
