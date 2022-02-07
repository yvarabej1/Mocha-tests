import snowflake from 'snowflake-sdk';
import config from 'config';

class SnowFlake {
    constructor() {
        this.setConnection().then( conn => {
            this._connection = conn;
        } ).catch( err => {
            console.error( err );
        } );
    }

    async sqlQuery( sqlText ) {
        return new Promise( ( resolve, reject ) => {
            this._connection.execute( {
                sqlText: sqlText,
                complete: ( err, stmt, rows ) => {
                    if ( err ) {
                        return reject( err );
                    }
                    return resolve( rows );
                }
            } );
        } );
    }

    async initialize() {
        this._connection = await this.setConnection();
    }

    async setConnection() {
        return new Promise( ( resolve, reject ) => {
            console.log( "starting connection" );
            this._connection = snowflake.createConnection( {
                account: process.env.snowflake_account,
                username: process.env.snowflake_username,
                password: process.env.snowflake_password,
                database: config.snowFlake_DB,
                schema: config.snowFlakeSchema
            } );
            this._connection.connect( async function ( err, conn ) {
                if ( err ) {
                    console.error( 'Unable to connect: ' + err.message );
                    return reject( err );
                }
                else {
                    console.log( 'Successfully connected to Snowflake.' );
                    return resolve( conn );
                }
            } )
        } );
        return this._connection;
    }
}
module.exports = SnowFlake;