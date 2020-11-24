const mongoose = require('mongoose')
const {updateCustomer} = require('../buisness_logic/update-customer')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  let result
  try{
      if(req.body.emailId && req.body.data)
      {
        result = await updateCustomer(req.body.emailId,req.body.data)
        return res.status(result.status).json(result.message)
      }
      else
      throw new Error("parameter are not properly defined")
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }
  res.json(result)
  }
 