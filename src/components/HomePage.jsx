import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const HomePage = () => {
  useEffect(() => {
    const scrollToBottom = () => {
      const element = document.body;
      element.scrollTo({
        top: element.scrollHeight - element.clientHeight,
        behavior: "smooth",
      });
    };
    scrollToBottom();
  }, []);
  return (
    <article className="homeContent">
      <main className="home-page">
        <div id="contentHomeP">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/create-account">
            <button className="btnsign">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="btnLogin">Already Registered? Login</button>
          </Link>
        </div>
      </main>
      <Footer />
    </article>
  );
};

export default HomePage;