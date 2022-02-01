const { Client } = require('pg');
const mocha = require('mocha');
const chai = require('chai');
const Person = require('./class_user');

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'test1',
    password: 'werhan2014',
    port: 5432,
});
client.connect();
client.query(`Select * from person`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})
module.exports.query = (text, values) => {
    return client.query(text, values)
  }
