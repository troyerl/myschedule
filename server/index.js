const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

var sqlLite = require('./mySql');
const dbConnection = new sqlLite();

app.get('/checkUser', async function(req, res) {
  const query = `SELECT name FROM sqlite_master WHERE type='table' AND name='user';`

  dbConnection.sqlQuery(query, function(data) {
    res.send(data);
  })
});

app.get('/createUserTable', function(req, res) {
  const query = `CREATE TABLE user (
    firstname     TEXT      NOT NULL,
    lastname      TEXT      NOT NULL,
    email         TEXT      NOT NULL
  );`

  dbConnection.execQuery(query, function(data) {
    res.sendStatus(data);
  })
});

app.get('/createUser/:userInfo', function(req, res) {
  const userInfo = JSON.parse(req.params.userInfo);
  const query = `INSERT INTO user values ('${userInfo.firstname}', '${userInfo.lastname}', '${userInfo.email}');`
  
  dbConnection.execQuery(query, function(data) {
    res.sendStatus(data);
  })

  
});

app.get('/getUser', function(req, res) {
  const query = `SELECT * FROM user;`
  dbConnection.sqlQuery(query, function(data) {
    res.send(data);
  })
});

app.listen(5000);
console.log("Server running on port 5000");