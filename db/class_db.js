const { Client } = require('pg');
const text = `Select * from person`;  
require('dotenv').config({Path: './.env'});
const { data } = require('jquery');


class DataBase {

  createConnection() {  
    //console.log(process.env.PASSWORD);
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
    const result = await sqlClient.query(text);
       console.log(result.rows);
       return result.rows;
}
async doQuery2(sqlClient, text) {
  this.sqlClient = sqlClient;
  this.text = text;
  const result = await sqlClient.query(text); 
  console.log(result.rows);
       return result.rows;
  };
}

module.exports = DataBase;
