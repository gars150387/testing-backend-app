const { response } = require('express')
const User = require('../models/User')

const newUser = async (request, response = response ) => {

    // const { groupName, name, lastName, email, phoneNumber} = request.body

    try {
        
        const user = new User( request.body )

        await user.save()
        
        response.status(201).json({
            ok: true,
            msg: 'new user',
            user
        });

    } catch (error) {
        console.log( error )

        response.status(500).json({
            ok: false,
            msg: 'Please contact adminitrator',
        });
    }


}


const login = (request, response = response) => {

    console.log(request.body)
    response.json({
        ok: true,
        msg: 'login'
    })
}

const renewToken = (request, response = response) => {
    response.json({
        ok: true,
        msg: "renew"
    })
}

module.exports = {
    newUser,
    renewToken,
    login
}