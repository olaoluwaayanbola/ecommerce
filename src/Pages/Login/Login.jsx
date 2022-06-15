import React from 'react'
import "./Login.scss"
const Login = () => {
  return (
    <div className='Login-Container'>
        <div className="Wapper">
            <div className="title">
                <h3>
                    SIGN-IN
                </h3>
            </div>
            <form action="" className='Form'>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
                <a href="">CREATE A NEW ACCOUNT</a>
                <div className="button">
                    <button>SIGIN</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login