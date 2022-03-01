const STRING_CONNECTION = process.env.CONNECTION_STRING;
const mongoose = require('mongoose')


mongoose.connect(STRING_CONNECTION,)

{

    userNewURLParser: true,
        userUnifiedTopology: true,

})
.then(() => console.log('MongoDB');)
.catch (err=> console.log(err);)

module.exports = 