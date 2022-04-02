const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    password: {
        type:String,
        required:true
    },
    prescription : [],
    height:{
        type : Number,

    },
    weight: {
        type:Number,

    },
    phoneNumber : {
        type: Number,

    }
})

const UserModel = mongoose.model("user",UserSchema);

module.exports = UserModel
