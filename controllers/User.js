const res = require("express/lib/response")
const User = require("../models/UserModel")

const GetDetails = async() => {

    try {
        const user = await User.find({})
        res.send(user)
    } catch (error) {
        res.status(400).send({message : "Server Error"})
    }
}

module.exports = {GetDetails}