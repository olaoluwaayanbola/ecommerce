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
  const { dispatch } = useContext(contextAuth)
  const [info, setInfo] = useState({
    username: "",
    email: null,
  });
  const [wrong, setWrong] = useState();
  const handleForm = (event) => {
    const value = event.target.value;

    setInfo({
      ...info,
      [event.target.name]: value,
    });

  };
  console.log()
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, info.email, info.username)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        console.log(user)
        Navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    console.log(wrong)
  };
  return (
    <div className="Login-Container" >
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
          {wrong && <p style={{ color: "red" }}>Fill in the inputs</p>}
          <a href="" id="fpassword">FORGOT PASSWORD?</a>
          <Link to="/Signin">
            CREATE A NEW ACCOUNT
          </Link>
          <div className="button" onClick={() => {
            if (info.email == null) {
              setWrong(true);
            }
          }}>
            <button>SIGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
