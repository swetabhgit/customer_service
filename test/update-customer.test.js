var expect = require('chai').expect;
const sinon = require('sinon')
//const connection = require('../src/connection/db')
const mongoose = require('mongoose')
require("dotenv").config()
const {updateCustomer} = require('../src/buisness_logic/update-customer')


describe('updating customer', function() {
    it('updated',  function() {
      mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((res)=>{
           updateCustomer("swet@gamil.com",{name:"swetabh"}).then((resp)=>{
             expect(resp.status).to.equal(501)
               // done()
               console.log(resp)
          //     mongoose.disconnect()
            }).catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
        })
    });
