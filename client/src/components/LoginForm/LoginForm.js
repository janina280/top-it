import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {faUser, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";

function LoginForm(props) {
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();
    const auth = useAuth();

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();

        if (state.username !== "" && state.password !== "") {
            const payload = {
                username: state.username,
                password: state.password,
            };
            auth.loginAction(payload);
        }
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
                            <FontAwesomeIcon icon={faUser} className="login__icon"/>
                            <input
                                type="text"
                                className="login__input"
                                id="username"
                                aria-describedby="usernameHelp"
                                placeholder="Username"
                                value={state.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faLock} className="login__icon"/>
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
                            <span className="button__text">Log In Now</span>
                            <FontAwesomeIcon icon={faChevronRight} className="button__icon"/>
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
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
