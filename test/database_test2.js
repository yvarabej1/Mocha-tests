const DataBase1 = require('../db/class_connect.js');
const mocha = require('mocha');
const chai = require('chai');
const { expect, assert } = require('chai');
const Client = require('pg');
const myTask = require('jsonpath');
const { string } = require('yargs');


  describe('New tests', () =>{
    let myDataBase2;
    before( async() =>{
     myDataBase2 = new DataBase1();
    });
      after( async()=> {
        myDataBase2.toEnd();
        console.log('client has disconnected');
    });
    it.only('Get and assert JSON from the DataBase', async () =>{
      const result =  await myDataBase2.doQuery2('select * from person');
      const jsonResult = JSON.parse(JSON.stringify(result));
      const dbJson = myTask.value(jsonResult, '$..[?(@.id==1)].country');
      console.log(dbJson);
      expect(dbJson).to.be.a('string');
      
    });
  });