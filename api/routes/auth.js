const router = require("express").Router();
const User = require("../model/User");
const CryptoJS = require("crypto-js");
const { json } = require("express");
//REGISTER
//create user with body and encrypt password with crypto-js
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password, "laolu"
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN-INFORMATION
// User will login using name and passwod

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne(
      {
        username: req.body.username
      }
    );

    !user && res.status(401).json("Wrong User Name");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      "laolu"
    ).toString(CryptoJS.enc.Utf8)

    console.log(hashedPassword );
    console.log(req.body.password)

    if( hashedPassword !== req.body.password ){
      response.status(401).json("Wrong passwords");
    }
    
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(err);
}
});
module.exports = router;