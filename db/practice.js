const Client = require('pg');
const DataBase = require('../db/class_db');

const myBase = new DataBase();
console.log(myBase.createConnection());
myBase.doQuery(client, `Select * from person`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})