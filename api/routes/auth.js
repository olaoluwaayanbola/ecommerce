const router = require("express").Router();
const User = require("../model/User");
const CryptoJS = require("crypto-js");
const {json} = require("express");
const jwt = require("jsonwebtoken");
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
    //user _data from mongodb request userid or admin status to make password    
    const accessToken = jwt.sign(
      {
          id: user._id,
          isAdmin: user.isAdmin,
      },
      "laolu",
          {expiresIn:"3d"}
      );
    // // mongodb saves files into a doc object thats why it is user_doc
    const { password, ...others } = user._doc;
    //using others as response in an effort tosave passwords from being exposed
    res.status(200).json({...others, accessToken});

  }catch(err){
    res.status(500).json(err);
}
});
module.exports = router;