import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //some fancy firebas login
  };

  const register = (e) => {
    e.preventDefault();
    //some fancy firebas login
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="sumbit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Merch Perch's Condition of Use & Sale ,{" "}
          <br />
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Merch Perch Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
