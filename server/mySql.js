const sqlite3 = require('sqlite3').verbose();
const file = "./database.db";

class sqlLite {
  sqlQuery(query, callback) {
    const db = new sqlite3.Database(file, (err) => {
      if (err) {console.log(err)}
    });
  
    db.serialize(function() {
      let data = []; //for storing the rows.
      db.each(query , function(err, row) {
        if (err) {console.log(err)};
          data.push(row); //pushing rows into array
      }, function(){ // calling function when all rows have been pulled
          db.close(); //closing connection
          callback(data); 
      });
    });
  };

  execQuery(query, callback) {
    const db = new sqlite3.Database(file, (err) => {
      if (err) {console.log(err)}
    });
  
    db.serialize(function() {
      db.exec(query , function(err) {
        if (err) {console.log(err)};
          db.close();
          callback(200);
      });
    });
  };
}

module.exports = sqlLite;