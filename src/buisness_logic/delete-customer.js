const customerModel = require('../model/customers').customerModel
const {logger} = require('../../utils/winston')

deleteCustomer =async (emailId)=>{
let isExist = await customerModel.findOne({'emailId':emailId})
 if(isExist)
{
let customer = await customerModel.deleteOne({'emailId':emailId})
return new Promise((resolve)=>resolve({status:200, "message":"item deleted"}))
}
else
{
   return new Promise((resolve)=>resolve({status :403, "message":"the item is not present"}))
}
} 
exports.deleteCustomer = deleteCustomer