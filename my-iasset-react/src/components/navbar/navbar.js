import React from "react";
import { Link } from "react-router-dom";
import '../../css/navbar/navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              iAsset
            </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  หน้าหลัก
                </a>
                <a className="nav-link" href="#">
                  ยืม
                </a>
                <a className="nav-link" href="#">
                  คืน
                </a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
