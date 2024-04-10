import React, { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import InputField from "./inputFeilds/InputField";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Enter Email and Password");
      return
    }
    const formData = localStorage.getItem("formData");
    const formDataString = JSON.parse(formData);
    if (formDataString.email===email || formDataString===password) {
      navigate("/account-settings");
    }else{
      alert("Invalid Email/Password!")
    }
  };
  const gotoHome = () =>{
    navigate("/");
  }
  return (
    <div className="loginForm">
      <form className="createAccount loginPage">
      <span className="homeGoTo" onClick={gotoHome}><HomeIcon/><span >Home</span></span>
      <h2>Sign in to your PopX account</h2>
        <InputField
          label="Email Address"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password "
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="createAccountBtn loginBtn"
          type="button"
          onClick={() => handleSubmit()}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPage;