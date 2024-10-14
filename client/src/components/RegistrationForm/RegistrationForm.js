import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import { useNavigate } from "react-router-dom";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
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
        firstName: state.firstName,
        lastName: state.lastName,
        address: state.address,
        phoneNumber: state.phoneNumber,
      };
      axios
        .post(API_BASE_URL + "/user/register", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
            redirectToHome();
            props.showError(null);
          } else {
            props.showError("Some error occurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };

  const redirectToHome = () => {
    props.updateTitle("Home");
    navigate("/home");
  };

  const redirectToLogin = () => {
    props.updateTitle("Login");
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
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputFirstName1">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Add First Name"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputLastName1">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Add Last Name"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputAddress1">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPhoneNumber1">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Phone Number"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>
          Login here
        </span>
      </div>
    </div>
  );
}

export default RegistrationForm;
