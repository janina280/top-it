import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./LoginForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(API_BASE_URL + "/user/login", payload)
      .then(function (response) {
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
          redirectToHome();
          props.showError(null);
        } else if (response.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const redirectToHome = () => {
    props.updateTitle("Home");
    navigate("/home");
  };

  const redirectToRegister = () => {
    navigate("/register");
    props.updateTitle("Register");
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <FontAwesomeIcon icon={faUser} className="login__icon" />
              <input
                type="email"
                className="login__input"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <FontAwesomeIcon icon={faLock} className="login__icon" />
              <input
                type="password"
                className="login__input"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-check"></div>
            <button
              type="submit"
              className="button login__submit"
              onClick={handleSubmitClick}
            >
              <span class="button__text">Log In Now</span>
              <FontAwesomeIcon icon={faChevronRight} className="button__icon" />
            </button>
          </form>
          <div className="social-login">
            <a href="#" className="social-login__icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-login__icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-login__icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
        <div
          className="alert alert-success mt-2"
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <br/>
        <div className="registerMessage">
          <span>Don't have an account? </span>
          <span className="loginText" onClick={() => redirectToRegister()}>
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
