
const sqlite3 = require('sqlite3').verbose();
const file = "./database.db";

class MySql {
  constructor() {
    let test = `CREATE TABLE test ( \
      ID INT PRIMARY KEY     NOT NULL,
      NAME           TEXT    NOT NULL,
   );`
    this.db = new sqlite3.Database(file, (err) => {
      if (err) {console.log(err)}

      console.log('connected');
    });
    this.db.all(test, function(err, rows) {
      if (err) { console.log(err) }
      console.log('created table');
    });	

    this.db.all(`INSERT INTO test VALUES (1, 'Logan');`, function(err, rows) {
      if (err) { console.log(err) }
      console.log('added to table');
    });	

    this.db.close();
  };

  

  test() {
    this.db = new sqlite3.Database(file, (err) => {
      if (err) {console.log(err)}

      console.log('connected');
    });

    this.db.all(`SELECT * FROM test;`, function(err, rows) {
      if (err) { console.log(err) }
      rows.forEach(function (row) {
        console.log(row.name);
    })
    });	
  }
}

module.exports = MySql;