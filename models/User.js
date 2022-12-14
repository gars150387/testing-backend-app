const { Schema, model } = require("mongoose")


const UserSchema = Schema({

    groupName:{
        type: String,
        required: false,
        unique: false
    },
    name:{
        type: String,
        required: true,
        unique: false
    },
    lastName:{
        type: String,
        required: true,
        unique: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique:false
    }
})

//to eliminate return an id instead of _id

UserSchema.method('toJSON', function() {
    const { _id, __v, ...object } = this.toObject()

    object.id = _id
    return object;

})



module.exports = model( 'User', UserSchema )