const request = require('supertest');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const url = 'https://gorest.co.in/public/v1/users';
describe('Assertion', function() {
    it.only('Asserting json to be not null', async function() {
        const response = await request(url)
            .get('/users')
            .set('Accept', 'application/json')
        expect(response).to.be.not.null

    });

});
