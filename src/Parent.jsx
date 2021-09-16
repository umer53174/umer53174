import Login from "./login";
import React from "react";
import Register from "./Register";
import "./index.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Parent = () => {
  //// Login User State
  // const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      textTransform: "lowercase",
    },
  }));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const [LoginUser, SetLoginUser] = useState({
    email: "",
    password: "",
  });

  /// Login User Function
  const PostDta = async (e) => {
    e.preventDefault();
    const { email, password } = LoginUser;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.error) {
      window.alert("Invalid Username or Password..!");
    } else {
      window.alert("Login Successful");
      localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/profile";
    }
  };

  //// Register User State///
  const [RegisterUser, setRegisterUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  //// Send Regsiter
  const SendRegData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, password } = RegisterUser;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.error) {
      window.alert("User Already");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      setValue(0);
    }
  };
  ////
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <AppBar position="static" color="primary">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Login" />
          <Tab label="SignUp" />
        </Tabs>
      </AppBar>
      {value == 0 && (
        <Login
          LoginUser={LoginUser}
          SetLoginUser={SetLoginUser}
          PostDta={PostDta}
        />
      )}
      {value == 1 && (
        <Register
          RegisterUser={RegisterUser}
          setRegisterUser={setRegisterUser}
          SendRegData={SendRegData}
        />
      )}
    </>
  );
};

export default Parent;
