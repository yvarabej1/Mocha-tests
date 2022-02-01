const { Client } = require('pg');
const text = `Select * from person`;  
require('dotenv').config({Path: './.env'});
const { data } = require('jquery');


class DataBase {
  /*constructor(database, host, port, user, password) {
    this.database = database;
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
  }*/



  createConnection() {  
     const client = new Client({
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
    });
      client.connect();
    return client;
  }

  async doQuery(sqlClient, text) {
    this.sqlClient = sqlClient;
    this.text = text;
    const result = await sqlClient.query(`Select * from person`);
       console.log(result.rows);
       return result.rows;
}
async doQuery2(sqlClient, text) {
  this.sqlClient = sqlClient;
  this.text = text;
  const result = await sqlClient.query(`Select name from person`); 
  console.log(result.rows);
       return result.rows;
  };
}

module.exports = DataBase;
DataBase.prototype