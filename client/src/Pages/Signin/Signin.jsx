import React from "react";
import "./Signin.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

const Signin = () => {
  const [info, setInfo] = useState({
    Name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(info);
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
    console.log(info.userName)
    createUserWithEmailAndPassword(auth, info.email, info.userName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="Sign-in-container">
      <div className="Wrapper">
        <h3>CREATE AN ACCOUNT</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="Name"
            onChange={handleForm}
            value={info.Name}
          />
          <input
            type="text"
            placeholder="lastname"
            name="lastName"
            onChange={handleForm}
            value={info.lastName}
          />
          <input
            type="text"
            placeholder="username"
            name="userName"
            onChange={handleForm}
            value={info.userName}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleForm}
            value={info.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleForm}
            value={info.password}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleForm}
            value={info.confirmPassword}
          />
        </form>
        <div className="policy">
          lorenm ipsum adipisci facilis expedita veritatis unde excepturi.
        </div>
        <button type="submit" onClick={handleSubmit}>
          CREATE USER
        </button>
      </div>
    </div>
  );
};

export default Signin;
