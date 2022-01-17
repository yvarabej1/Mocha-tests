const request = require('supertest');
const mocha = require('mocha');
const chai = require('chai');

const url = 'https://gorest.co.in/public/v1/users';
describe('GET /user', function() {
    it.only('responds with json', function(done) {
      request(url)
        .get('')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });