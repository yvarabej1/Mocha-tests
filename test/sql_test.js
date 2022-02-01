const mocha = require('mocha');
const request = require('supertest');
const User = require("../db/class_user");
const chai = require('chai');
const { expect, assert } = require('chai');
const { Client } = require('pg');

describe('Create records', () =>{
  it('create a user in DB', () =>{
    const max = new User(19, 'Max', 'Slovakia');
    console.log(max.hello(11,6));
    console.log(max.greet());
    assert.isTrue(max, 17, 'error, we are expecting that max is 19');
      })
});