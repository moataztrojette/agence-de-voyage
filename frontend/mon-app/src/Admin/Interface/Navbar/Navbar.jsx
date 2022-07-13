import React from 'react';


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
          <div className="container-fluid py-1 px-3">
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a href={() => false} className="nav-link text-body font-weight-bold px-0">
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">BEN WARGHEM Hedi</span>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href={() => false} 
 className="nav-link text-body p-0">
                    <img src="/img/icons8-shutdown-48.png" width="30px" alt="" onClick={props.logout} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>  );
}
 
export default Navbar;