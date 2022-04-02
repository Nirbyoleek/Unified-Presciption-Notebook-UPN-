const UserRouter = require("express").Router();
const {GetDetails} = require("../controllers/User")


UserRouter.get("/details", GetDetails )

module.exports = UserRouter