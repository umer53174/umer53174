import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
// });
const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 300,
  margin: "20px auto",
};
const AvaterStyle = { backgroundColor: "green" };
const ButtonStyle = { margin: "50px auto" };

const Register = (props) => {
  // const classess = useStyles();

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={AvaterStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h3>Registration</h3>
          </Grid>
          <TextField
            label="FirstName"
            id="fname"
            name="fname"
            value={
              props && props.RegisterUser && props.RegisterUser.fname
                ? props.RegisterUser.fname
                : ""
            }
            onChange={(e) => {
              props.setRegisterUser({
                ...props.RegisterUser,
                fname: e.target.value,
              });
            }}
            fullWidth
            required
          />
          <TextField
            label="LastName"
            id="lname"
            name="lname"
            value={
              props && props.RegisterUser && props.RegisterUser.lname
                ? props.RegisterUser.lname
                : ""
            }
            onChange={(e) => {
              props.setRegisterUser({
                ...props.RegisterUser,
                lname: e.target.value,
              });
            }}
            fullWidth
            required
          />

          <TextField
            label="Email Address"
            id="email"
            name="email"
            value={
              props && props.RegisterUser && props.RegisterUser.email
                ? props.RegisterUser.email
                : ""
            }
            onChange={(e) => {
              props.setRegisterUser({
                ...props.RegisterUser,
                email: e.target.value,
              });
            }}
            fullWidth
            required
          />

          <TextField
            label="Password"
            id="password"
            name="password"
            value={
              props && props.RegisterUser && props.RegisterUser.password
                ? props.RegisterUser.password
                : ""
            }
            onChange={(e) => {
              props.setRegisterUser({
                ...props.RegisterUser,
                password: e.target.value,
              });
            }}
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={ButtonStyle}
            onClick={props.SendRegData}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
