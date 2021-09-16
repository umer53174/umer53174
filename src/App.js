import Parent from "./Parent";
import { Route, Switch } from "react-router";
import HomePage from "./Homepage";
import Login from "./login";
import Navbar from "./navbar";
import Register from "./Register";
import Profile from "./profile";
import Logout from "./logout";
import LoginDesign from "./logindesign";
import UserRoles from "./UserRoles";
import Roles from "./RDashboard";

function App() {
  let getToken = localStorage.getItem("token");
  console.log("token is", getToken);
  return (
    <>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/UserRoles" component={UserRoles} />
      <Route exact path="/logindesign" component={LoginDesign} />
      <Route exact path="/parent" component={Parent} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/RDashboard" component={Roles} />
      {getToken ? <Route exact path="/profile" component={Profile} /> : ""}
    </>
  );
}

export default App;
