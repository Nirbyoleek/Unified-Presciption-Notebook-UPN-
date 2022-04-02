const UserRouter = require("express").Router();
const {GetDetails} = require("../controllers/User")

// @route /api/fetails
// @desc to get details of user
// @access public 
UserRouter.get("/details/:email", GetDetails )

module.exports = UserRouter