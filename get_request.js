const supertest = require("supertest");
const mocha = require('mocha');
const chai = require('chai');
let chaiHttp = require('chaiHttp');
chai.use(chaiHttp);
const assert = chai.assert;

chai.request('https://gorest.co.in/public/v1/users').get('/').end((error,response) => {

})