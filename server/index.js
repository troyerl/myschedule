const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const db = require('./mySql');

const dbConnection = new db();

app.get('/createDb', function(req, res) {
  dbConnection.test();
});

app.listen(5000);
console.log("Server running on port 5000");