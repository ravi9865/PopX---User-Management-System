import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import InputField from "./inputFeilds/InputField";

const CreateAccountForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!fullName || !phone || !email || !password) {
      alert("Please enter Required'*' details...");
      return;
    }
    const formData = {
      fullName,
      phone,
      email,
      password,
      companyName,
    };
    const formDataString = JSON.stringify(formData);
    localStorage.setItem("formData", formDataString);
    // console.log(fullName, phone, email, password, companyName);
    alert("Account Created Sucessfully..");
    navigate("/account-settings");
  };
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <form className="createAccount">
      <span className="homeGoTo" onClick={gotoHome}>
        <HomeIcon />
        <span>Home</span>
      </span>
      <h1>Create your PopX account</h1>
      <InputField
        label="Full Name"
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <InputField
        label="Phone number"
        type="text"
        name="phoneNumber"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputField
        label="Email address"
        type="email"
        name="emailAddress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="Company name"
        type="text"
        name="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <div className="radioButton">
        <h2>Are you an Agency?*</h2>
        <input type="radio" name="agency" value={"Yes"} />
        <label htmlFor="yes">Yes</label>
        <input type="radio" name="agency" value={"No"} />
        <label htmlFor="No">No</label>
      </div>
      <button
        className="createAccountBtn"
        type="button"
        onClick={() => handleSubmit()}
      >
        Create Account
      </button>
    </form>
  );
};
export default CreateAccountForm;