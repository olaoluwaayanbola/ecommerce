import React from "react";
import "./Login.scss";
import { useState } from "react";
import {  signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
  });
  console.log("vop");
  const handleForm = (event) => {
    const value = event.target.value;
    setInfo({
      ...info,
      [event.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info.email)
    console.log( info.username)
    signInWithEmailAndPassword (auth, info.email, info.username)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log( errorMessage)
        // ..
      });
  };

  return (
    <div className="Login-Container">
      <div className="Wapper">
        <div className="title">
          <h3>SIGN-IN</h3>
        </div>
        <form action="" className="Form" onClick={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleForm}
          />
          <input
            type="email"
            placeholder="password"
            name="email"
            onChange={handleForm}
          />
          <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href="">CREATE A NEW ACCOUNT</a>
          <div className="button">
            <button>SIGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
