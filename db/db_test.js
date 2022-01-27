const myDataBase = require('../db/class_db')
const mocha = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const Client = require('pg');


  describe('Assertion', () =>{
    it.only('Assert data in the DataBase', async () =>{
      const myDataBase1 = new myDataBase();
      client = await myDataBase1.createConnection();
      const result = myDataBase1.doQuery(client, 'select * from person');
    })
  });
  