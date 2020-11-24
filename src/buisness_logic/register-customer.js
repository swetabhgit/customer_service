const customerModel = require('../model/customers').customerModel
const {logger} = require('../../utils/winston')
const {getEncryptedPassword} = require('../../utils/brypt')


registerCustomer =async (body)=>{
let isExist = await customerModel.findOne({'emailId':body.emailId})
body.password = await getEncryptedPassword(body.password)
if(!isExist)
{
let customer = new customerModel(body)
 let result = await customer.save()
 return new Promise(resolve => resolve({status:200, message:"registration successful"}))
}
return new Promise(resolve => resolve({status:501, message:"already exists"}))
}

exports.registerCustomer = registerCustomer