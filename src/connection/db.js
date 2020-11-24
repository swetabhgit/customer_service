const mongoose = require('mongoose')
module.exports = async (req, res, next)=>
{
    try{ await mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
console.log(":: connection established with database ::")
next()
    }
    catch(err)
    {
        next(err)
    }
}