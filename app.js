const fs = require('node:fs/promises');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', async function (req, res) {
  let dummyData;
  for (let i = 0; i < 5000; i++) {
    dummyData = await fs.readFile('data.json');
  }
  const json = JSON.parse(dummyData);
  res.json({ message: 'Success!', data: json });
});

app.listen(3000);
