const expressRoute = require('express').Router();  

// expressRoute.get("/usertest",(req,res) =>{
//     res.send("test working")
// })
expressRoute.post("/usertest",(req,res) =>{
    const username = req.body.username;
    console.log(usertest)
})

module.exports = expressRoute
