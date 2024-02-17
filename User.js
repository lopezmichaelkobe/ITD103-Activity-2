const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    CarName: String,
    Manufacturer: String,
    Year: String,
    Country: String,
    Propulsion: String,

})


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;