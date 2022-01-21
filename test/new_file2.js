const request = require('supertest');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const json = require('jsonpath');

const url = 'https://gorest.co.in/public/v1/users';
describe('JSONpath', function() {
    it('Finding all ids', async function() {
        const response = await request(url)
            .get('')
            .set('Accept', 'application/json');
        
        const ids = json.query(response.body, '$..id');
        console.log(ids);

    });

    it('Finding according to status', async function() {
        const response = await request(url)
            .get('')
            .set('Accept', 'application/json');
        const dataJson = json.value(response.body,'$..data[?(@.email=="tuananh035434@gmail.com")]');
        console.log(dataJson);
    });
});
