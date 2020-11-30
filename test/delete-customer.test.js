var expect = require('chai').expect;
const sinon = require('sinon')
const mongoose = require('mongoose')
require("dotenv").config()
const customer = require('../src/buisness_logic/delete-customer')


describe('deleting customer', function() {
    it('deleted',  function() {
      mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((res)=>{
           customer.deleteCustomer("ser@gmil.com").then((resp)=>{
             expect(resp.status).to.equal(403)
            }).catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
        })
    });
