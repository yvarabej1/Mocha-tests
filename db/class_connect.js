//const { Client, ClientBase } = require('pg');
const { Client } = require('pg');
const text = `Select * from person`;  
require('dotenv').config({Path: './.env'});
const { data } = require('jquery');
//const { connect } = require('superagent');

//let connection = new Client1();
class DataBase1 {
    constructor() {
        this.toConnect().then( conn => {
            this._connection = conn;
        } ).catch( err => {
            console.error( err );
        } );
    }

    async toEnd() {
        await this._connection.end();
    }

async toConnect() {
    return new Promise( ( resolve, reject ) => {
        console.log( "starting connection" );
    
    this._connection = new Client({
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      this._connection.connect( async function ( err, conn ) {
        if ( err ) {
            console.error( 'Unable to connect: ' + err.message );
            return reject( err );
        }
        else {
            console.log( 'Successfully connected to DB.' );
            return resolve( conn );
        }
    });
    });

};
    async doQuery(text) {
        return new Promise( ( resolve, reject ) => {
            this._connection.query( {
                text: text,
                complete: ( err, stmt, rows ) => {
                    if ( err ) {
                        return reject( err );
                    }
                    return resolve( rows );
                }
            } );
        } );
}
    async doQuery2(text) {
        this.text = text;
        const result = await this._connection.query(text); 
        console.log(result.rows);
        return result.rows;
  };
}
module.exports = DataBase1;
