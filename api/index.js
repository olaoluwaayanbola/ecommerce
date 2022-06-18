const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB CONNECTED"))
.catch((err)=>console.log(`DB CONNECT ${err}`))

app.use(express.json());
app.use("/api/auth", authRoute);





