import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
const Navbar = () => {
  let getToken = localStorage.getItem("token");
  console.log("token is", getToken);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            DoneSol
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/parent">
                  Login
                </NavLink>
              </li>

              {getToken ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {getToken ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {getToken ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/RDashboard">
                    UserRoles
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
