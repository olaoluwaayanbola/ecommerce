import React from "react";
import "./Signin.scss";
const Signin = () => {
  return (
    <div className="Sign-in-container">
      <div className="Wrapper">
        <h3>CREATE AN ACCOUNT</h3>
        <form action="">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="lastname" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="confirm password" />
        </form>
        <div className="policy">
          lorenm ipsum adipisci facilis expedita veritatis unde excepturi.
        </div>
        <button>CREATE USER</button>
      </div>
    </div>
  );
};

export default Signin;
