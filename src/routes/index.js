var express = require('express');
var router = express.Router();
const registerCustomer = require('../controller/register-customer') 
const deleteCustomer = require('../controller/delete-customer')
const updateCustomer = require('../controller/update-customer')
const winston = require('winston');
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

router.post('/register', registerCustomer)
router.delete('/delete', deleteCustomer)
router.put('/update', updateCustomer)

module.exports = router;
