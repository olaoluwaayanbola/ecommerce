const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const port = 5000;
const Router = require('./Router/User')

dotenv.config()

app.get("/api/test", () => {console.log("test successful");})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB CONNECTED"))
.catch((err)=>console.log(`DB CONNECT ${err}`))

app.listen(port,()=>{
    console.log(`hello ${port}`)
})

app.get("/api/test",Router)


