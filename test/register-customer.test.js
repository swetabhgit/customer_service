var expect = require('chai').expect;
const sinon = require('sinon')
const connection = require('../src/connection/db')
const mongoose = require('mongoose')
require("dotenv").config()
const {registerCustomer} = require('../src/buisness_logic/register-customer')


describe('inserting user', function() {
    it('checking if user exists',  function() {
      mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((res)=>{
            registerCustomer({username:"swetabh",password:"swetabh"}).then((resp)=>{
                expect(resp.status).to.equal(501)
               // done()
               mongoose.disconnect()
            }).catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
        })
    });
