const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

// define reg schema
const RegisterSchema = new mongoose.Schema({
    user_name:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    },
    branch:{
        type: String,
        required: true,
    },
    regEmail:{
        type: String,
        required: true,
        unique: true
        
    },
    // password:{
    //     type: String,
    //     required: true,
    // }

    // Password is username12345 eg xavier12345, irene12345 etc
});


// Export Model
RegisterSchema.plugin(passportLocalMongoose, { usernameField: "regEmail"}); //used for auth
module.exports = mongoose.model("RegisterUser", RegisterSchema);

