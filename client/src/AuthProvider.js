import {useContext, createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL} from "./constants/apiConstants";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();

    const loginAction = (data) => {
        axios.post(API_BASE_URL + "/auth/authenticate", data)
            .then(function (response) {
                if (response.status === 200) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                    navigate("/");
                }
                else{
                    props.showError("Username and password do not match");
                }
            })
            .catch(res => {
                props.showError(res.message);
                console.log(res);
            });
    };

    const logOut = () => {
        setToken("");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{token, loginAction, logOut}}>
            {props.children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
