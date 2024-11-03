import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import { useNavigate } from "react-router-dom";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    address: "",
    phoneNumber: "",
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

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
        username: state.username,
        address: state.address,
        phoneNumber: state.phoneNumber,
      };
      axios
        .post(API_BASE_URL + "/auth/register", payload)
        .then(function (response) {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            props.showError(null);
            redirectToHome();
          } else {
            props.showError("Some error occurred");
          }
        })
        .catch(function (error) {
          props.showError("Please enter valid username and password");
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="register">
            <div className="register__field">
              <input
                type="text"
                className="register__input"
                id="username"
                placeholder="UserName"
                value={state.username}
                onChange={handleChange}
              />
            </div>
            <div className="register__field">
              <input
                type="text"
                className="register__input"
                id="address"
                placeholder="Address"
                value={state.address}
                onChange={handleChange}
              />
            </div>
            <div className="register__field">
              <input
                type="text"
                className="register__input"
                id="phoneNumber"
                placeholder="Phone Number"
                value={state.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="register__field">
              <input
                type="email"
                className="register__input"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="register__field">
              <input
                type="password"
                className="register__input"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="register__field">
              <input
                type="password"
                className="register__input"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="button register__submit"
              onClick={handleSubmitClick}
            >
              <span className="button__text">Register</span>
              <FontAwesomeIcon icon={faChevronRight} className="button__icon" />
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
        <br />
        <div className="mt-2">
          <span>Already have an account? </span>
          <span className="loginText" onClick={() => redirectToLogin()}>
            Login here
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
