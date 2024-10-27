import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./components/Home/Home";
import PrivateRoute from "./utils/PrivateRoute";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import AuthProvider from "./AuthProvider";

function App() {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);

    return (
        <div className="App">
            <Router>
                <AuthProvider showError={updateErrorMessage}
                              children={
                                  <>
                                      <Header title={title}/>
                                      <div className="container d-flex align-items-center flex-column">
                                          <Routes>
                                              <Route
                                                  path="/register"
                                                  element={
                                                      <RegistrationForm
                                                          showError={updateErrorMessage}
                                                          updateTitle={updateTitle}
                                                      />
                                                  }
                                              />
                                              <Route
                                                  path="/login"
                                                  element={
                                                      <LoginForm
                                                          showError={updateErrorMessage}
                                                          updateTitle={updateTitle}
                                                      />
                                                  }
                                              />
                                              <Route
                                                  element={<PrivateRoute/>}>
                                                  <Route path="/"
                                                         element={
                                                             <Home
                                                                 showError={updateErrorMessage}
                                                                 updateTitle={updateTitle}/>
                                                         }/>
                                              </Route>
                                          </Routes>
                                      </div>
                                  </>}/>
            </Router>

            <AlertComponent
                errorMessage={errorMessage}
                hideError={updateErrorMessage}
            />
        </div>
    )
        ;
}

export default App;
