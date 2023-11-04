import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../../css/navbar/navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              iAsset
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="/home" exact className="nav-link" activeClassName="active">
                  หน้าหลัก
                </NavLink>
                <NavLink to="/borrow" className="nav-link" activeClassName="active">
                  ยืม
                </NavLink>
                <NavLink to="/return" className="nav-link" activeClassName="active">
                  คืน
                </NavLink>
                <NavLink to="/userCreate" className="nav-link" activeClassName="active">
                  user
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }
  

export default NavBar;
