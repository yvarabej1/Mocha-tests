const { Client, ClientBase } = require('pg');

class DataBase {
  /*constructor(database, host, port, user, password) {
    this.database = database;
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password; //отдельным файлом .env
  }*/

  createConnection() {
    const client = new Client({
      database: 'test1',
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'werhan2014',
    });
  
    client.connect();
    /*client.query(`Select * from person`, (err, res) => {
        if (!err) {
            console.log(res.rows);
          } else {
            console.log(err.message);
          }
      client.end();
    });*/
  }

  doQuery(obj, newQuery) {
    Client(`Select * from person`, (err, res) => {
        if (!err) {
            return res.rows;
          } else {
            return err.message;
          }
    //return this.obj.createConnection();
    //return query and connection
  })
}
}
module.exports = DataBase;
