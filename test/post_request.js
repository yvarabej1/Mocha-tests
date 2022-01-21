const request = require('supertest');
const mocha = require('mocha');
const chai = require('chai');
const { use } = require('chai');
const expect = chai.expect;

const url = 'https://gorest.co.in/public/v1/users';
const random = Math.round(Math.random() * 9999);
const userData = {'name': 'Wayne Rooney4', 'gender':'male', 'email':`rooney${random}@fs.com`, 'status':'active'}
describe('POST /user', function () {
  it.only('Sends post request to create new user', async function() {
    const response = await request(url)
      .post('')
      .set('Authorization', 'Bearer a80643c1f8675b73c9f610c796f3798bf8d2769255ed9859de18a2e9ad72e418')
      .send(userData);
      console.log(response.body);
      const userId = response.body.data.id;
      const getResponse = await request(url)
      .get(`/${userId}`);
      console.log(getResponse.body);
      expect(getResponse.body.data.name).to.equal(userData.name);
    })
    
});