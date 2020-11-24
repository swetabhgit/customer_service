const customerModel = require('../model/customers').customerModel
const {logger} = require('../../utils/winston')

updateCustomer =async (emailAddress, body)=>{
    if(emailAddress)
    {
    let isExists = await customerModel.findOne({'emailId':emailAddress})
    if(isExists)
    {
    let result = await customerModel.findOneAndUpdate({'emailId':emailAddress},body)
    return new Promise(resolve=> resolve({status: 200, message:"field has been update"}))
    }
    else
    return new Promise(resolve=> resolve({status: 501, message:"not found"}))
    }
else
{
  return new Promise(resolve => (resolve({status: 200, message: "Please add emailId "})))
}

} 
exports.updateCustomer = updateCustomer