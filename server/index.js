const express = require('express')
const cron = require("node-cron");
const app = express();
var path = require('path');
const crud = require('./crud');
const { setupConnection, teardownConnection, createPost } = crud
const port = 3003

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/TM', (req, res) => {
  setupConnection('TeamsMessages').then(table => {
    table.find({}).toArray()
    .then(data => res.send(data))
    .catch((err) => console.log(err))
    .finally(() => teardownConnection())
  });
})

app.post('/TM', (req, res) => {
  setupConnection('TeamsMessages').then(table => {
    table.insertOne(req.body)
    .then(status => res.send(status))
    .catch((err) => console.log(err))
    .finally(() => teardownConnection())
  });
})
let date = new Date();
console.log(date.toLocaleTimeString());

cron.schedule("*/10 * * * *", function() {
  console.log("running a task every 10 minutes:");
  console.log(date.toLocaleTimeString());
});

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
