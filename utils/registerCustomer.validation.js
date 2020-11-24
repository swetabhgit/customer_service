const Joi = require('joi');

const customerSchema = Joi.object({
    name: Joi.string().required(),
    emailId: Joi.string().required(),
    mobileNumber: Joi.number().required(),
    address:Joi.string().required(),
    role:Joi.string().required(),
    password:Joi.string().required()
})
//const customerIdSchema = Joi.string().required()
module.exports = {customerSchema}