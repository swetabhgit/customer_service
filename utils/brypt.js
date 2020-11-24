const bcrypt = require('bcrypt');
const saltRounds = 10;
const getEncryptedPassword = async (password) =>{
    return bcrypt.hash(password, saltRounds)

} 

module.exports = {'getEncryptedPassword':getEncryptedPassword}