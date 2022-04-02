const express = require("express");
const cors = require("cors");
const UserRouter = require("./routes/UserRoutes");

require("./db/db")

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api",UserRouter)


const port = 5000||process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})

