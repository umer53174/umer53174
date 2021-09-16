import { useEffect, useState } from "react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import { Card, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    margin: "auto",
  },
  table: {
    width: "100%",
  },
}));
const Profile = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //// Model Use State///
  const [modelUser, setModelUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleClickOpen = (row) => {
    setModelUser(row);
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
    const { _id, fname, lname, email } = modelUser;
    const res = await fetch("/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        fname,
        lname,
        email,
      }),
    });
    const data = await res.json();
    if (data.status == 422 || !data) {
      window.alert("invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Data Updated ");
      console.log("Registration Successful");
      callProfilePage(page, rowsPerPage);
    }
  };
  /// Updating use state///

  const [profileUser, setProfileUser] = useState([]);

  //////// Table States
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userCounts, setCounts] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    callProfilePage(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    callProfilePage(page, event.target.value);
    setPage(0);
  };

  //// GETTING Data from BacKend///
  const callProfilePage = async (numberofResult, Numberofpage) => {
    const res = await fetch("/userinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: numberofResult,
        rowsPerPage: Numberofpage,
      }),
    });
    console.log(page);
    console.log(rowsPerPage);
    const data = await res.json();
    if (data.status == 422 || !data) {
      console.log("Invalid ");
    } else {
      console.log("Registration Successful", data);
      setProfileUser(data.user);
      setCounts(data.counts);
    }
  };

  //// DELETE FUNCTION////
  const HandleDeleteEvent = async (id) => {
    console.log("id is", id);
    const res = await fetch("/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();

    if (data.status == 422 || !data) {
      console.log("Invalid Registration");
    } else {
      callProfilePage(page, rowsPerPage);
      console.log("Login Successful", data);
    }
  };
  useEffect(() => {
    callProfilePage(page, rowsPerPage);
  }, []);

  // callProfilePage();
  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <Table
            className={classes.table}
            aria-label="simple table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>FirstName</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profileUser.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.fname}
                  </TableCell>
                  <TableCell align="right">{row.lname}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      variant="contained"
                      color="primary"
                      fontSize="small"
                      onClick={() => handleClickOpen(row)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      variant="contained"
                      color="primary"
                      fontSize="small"
                      onClick={() => HandleDeleteEvent(row._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TablePagination
              component="div"
              count={userCounts}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </Paper>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Record..</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fname"
            name="fname"
            onChange={(e) =>
              setModelUser({ ...modelUser, fname: e.target.value })
            }
            value={modelUser.fname}
            label="First Name"
            fullWidth
          />
          <TextField
            autoFocus
            name="lname"
            margin="dense"
            id="lname"
            onChange={(e) =>
              setModelUser({ ...modelUser, lname: e.target.value })
            }
            value={modelUser.lname}
            label="Last Name"
            fullWidth
          />
          <TextField
            autoFocus
            name="email"
            margin="dense"
            id="email"
            value={modelUser.email}
            onChange={(e) =>
              setModelUser({ ...modelUser, email: e.target.value })
            }
            label="Email"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Modify
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Profile;
