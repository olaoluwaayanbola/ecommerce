import React from "react";
import "./Login.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate()

  const {dispatch} = useContext(contextAuth)

  const [info, setInfo] = useState({
    username: "",
    email: "",
  });

  const handleForm = (event) => {
    const value = event.target.value;

    setInfo({
      ...info,
      [event.target.name]: value,
    });

  };
  
  const handleSubmit = (event) => {

    event.preventDefault();

    signInWithEmailAndPassword (auth, info.email, info.username)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN",payload:user})
        console.log(user)
        Navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
            placeholder="email"
            name="email"
            onChange={handleForm}
          />
          <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <Link to="/Signin">
            CREATE A NEW ACCOUNT
          </Link>
          <div className="button">
            <button>SIGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
