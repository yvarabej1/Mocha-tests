const request = require('supertest');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const json = require('jsonpath');

const url = 'https://gorest.co.in/public/v1/users';
describe('GET /user', function () {
  it('responds with json', function (done) {
    request(url)
      .get('')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.body);
        expect(res.body).to.be.not.null;
        const ids = json.query(res.body, '$..id');
        console.log(ids);
      })
      .expect(200, done);

    const assert = chai.assert;
  });
});
