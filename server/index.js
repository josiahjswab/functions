const express = require('express')
const app = express()
var path = require('path');
const port = 3003


// app.use(express.static('dist'))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('*', (req, res) => {
    console.log(path.resolve('../dist/index.html'));
    res.sendFile(path.resolve('./dist/index.html'));
  });
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
