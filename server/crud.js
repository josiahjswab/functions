const mongo = require('./mongo-connector');
const { client, dbName } = mongo;
/***
 * @description
 * @param {string} _collection - Mongo collection you want to interact with in this connection session.
 * @return {Collection<Document>}
 */
async function setupConnection(_collection) {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection(_collection);
  return collection;
}

function teardownConnection() {
  client.close()
}


function createPost(collection, payload) {
}

module.exports = {
  setupConnection,
  teardownConnection,
  createPost
}