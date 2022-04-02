const res = require("express/lib/response")
const User = require("../models/UserModel")


//function to get details of the user 
const GetDetails = async(req,res) => {
    try {
        const email = req.params.email
        const user = await User.find({email : email})
        res.send(user)
    } catch (error) {
        res.status(400).send({message : error})
    }
}

module.exports = {GetDetails}