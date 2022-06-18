const expressRoute = require('express').Router();  

expressRoute.get("/usertest",(req,res) =>{
    res.send("test working")
})

module.exports = expressRoute
