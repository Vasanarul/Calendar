const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.json());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello Calendar!')
})

app.listen(port, () => {
  console.log(`Jarvis is listening at http://localhost:${port}`)
})