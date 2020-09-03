// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');


let app = null;

function server() {
  app =  require("http").createServer(function (req, res) {
    res.end("Hello from server started by Electron app!");
  }).listen(9000);
}



exports.server = server;

// require("http").createServer(function (req, res) {
//   res.end("Hello from server started by Electron app!");
// }).listen(9000)


// const jsonParser = bodyParser.json()

// app.use(cors());

// var sqlLite = require('./mySql');
// const dbConnection = new sqlLite();

// const googleCalendar = require('./googleCalendar');

// app.get('/checkUser', async function(req, res) {
//   const query = `SELECT name FROM sqlite_master WHERE type='table' AND name='user';`

//   dbConnection.sqlQuery(query, function(data) {
//     res.send(data);
//   })
// });

// app.get('/createUserTable', function(req, res) {
//   const query = `CREATE TABLE IF NOT EXISTS user (
//     firstname     TEXT      NOT NULL,
//     lastname      TEXT      NOT NULL
//   );`

//   dbConnection.execQuery(query, function(data) {
//     res.sendStatus(data);
//   })
// });

// app.get('/createUser/:userInfo', function(req, res) {
//   const userInfo = JSON.parse(req.params.userInfo);
//   const query = `INSERT INTO user values ('${userInfo.firstname}', '${userInfo.lastname}');`
  
//   dbConnection.execQuery(query, function(data) {
//     res.sendStatus(data);
//   })
// });

// app.get('/getUser', function(req, res) {
//   const query = `SELECT * FROM user;`
//   dbConnection.sqlQuery(query, function(data) {
//     res.send(data);
//   })
// });

// app.get('/connectAccount/:service', function (req, res) {
//   res.send(googleCalendar.connectAccount())
// });

// app.post('/connectWithCode', jsonParser, function (req, res) {
//   googleCalendar.saveToken(req.body.code);
//   res.sendStatus(200);
// });

// app.listen(5000);
// console.log("Server running on port 5000");