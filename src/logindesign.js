import { Avatar, Grid, Paper } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const LoginDesign = () => {
  const paperStyle = {
    padding: 20,
    heigh: "100vh",
    width: 200,
    margin: "30px auto",
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle} />
      <Avatar>
        {" "}
        <LockOutlinedIcon />
      </Avatar>
    </Grid>
  );
};

export default LoginDesign;
