/*const myDataBase = require('../db/class_db');
const mocha = require('mocha');
const chai = require('chai');
const { expect, assert } = require('chai');
const Client = require('pg');
const myTask = require('jsonpath');


  describe('Two tests', () =>{
    const myDataBase1 = new myDataBase();
    let mysSql; 
    before( async () => {
     mysSql = myDataBase1.createConnection();
     });
     after( async()=> {
      mysSql.end();
      console.log('client has disconnected')
  });
    it.only('Get and assert JSON from the DataBase', async () =>{
      //console.log('hello');
      const result = await myDataBase1.doQuery(mysSql, 'select * from person');
      const jsonResult = JSON.parse(JSON.stringify(result));
      const dbJson = myTask.value(jsonResult, '$..[?(@.id==1)].country');
      console.log(dbJson);
      expect(dbJson).to.have.lengthOf(7);
    });
    it.only('Selecting name', () => {
      const certainId = myDataBase1.doQuery2(mysSql, 'Select name from person');
      
    });
    
  });*/