const expressRoute = require('express').Router();  
// end point for routes
expressRoute.get("/usertest",(req,res) =>{
    res.send("test working")
})
expressRoute.post("/test",(req,res) =>{
    const username = req.body.username;
    console.log(username);
   
})

module.exports = expressRoute
