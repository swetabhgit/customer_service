const mongoose = require('mongoose')
const {Schema} = mongoose

const customerSchema = new Schema({
   name:String,
   address:String,
   mobileNumber:Number,
   emailId:String,
   role:String,
   password:String
})

exports.customerModel = mongoose.model('Customer', customerSchema)