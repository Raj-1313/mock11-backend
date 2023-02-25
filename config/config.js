const mongoose= require('mongoose');

mongoose.set('strictQuery', true);
let connect= mongoose.connect(process.env.db_url)

module.exports= connect
