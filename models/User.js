const { Schema, model } = require("mongoose")


const UserSchema = Schema({

    groupName:{
        type: String,
        required: false
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
    }
})


module.exports = model( 'User', UserSchema )