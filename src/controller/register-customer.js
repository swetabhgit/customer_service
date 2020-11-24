const mongoose = require('mongoose')
const {registerCustomer} = require('../buisness_logic/register-customer')
//const {findCustomer} = require('../buisness_logic/find-customer')
const {logger} = require('../../utils/winston')
const {customerSchema} = require('../../utils/registerCustomer.validation')
module.exports = async function(req, res, next) {
  try{
    let validate = await customerSchema.validateAsync(req.body)
    console.log(validate)
     let result = await registerCustomer(req.body)
     res.status(result.status).json(result.message)

      }
  catch(err)
  {
    logger.log({level:'error', message: err.msg});
    res.status(err.status).json({"error": err.msg})
    next(err)
  }
  }
 