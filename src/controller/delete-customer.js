const mongoose = require('mongoose')
const {deleteCustomer} = require('../buisness_logic/delete-customer')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  try{
  result = await deleteCustomer(req.query.emailId)
  res.status(result.status).json(result.message)
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }

  }