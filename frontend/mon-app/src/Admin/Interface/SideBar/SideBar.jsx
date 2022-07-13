import React from 'react';

import { Link } from 'react-router-dom';






const SideBar = (props) => {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
          <div className="sidenav-header">
            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
            <a className="navbar-brand m-0"  rel="noreferrer">
              <span className="ms-1 font-weight-bold"></span>
            </a>
          </div>
          <hr className="horizontal dark mt-0" />
          <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
            <ul className="navbar-nav">
      
          
              <li className="nav-item">
              <Link to={'/admin/functions'} className="nav-link  " >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" style={{width: '3em', height: '3em'}}>
                    <img src="/img/3125848.png" alt="" style={{width: "2em"}}/>
                    <title>settings</title>
                  </div>
                  <span className="nav-link-text ms-1">Voucher</span>
                </Link>
              </li>
           



              <li className="nav-item">
                <a className='nav-link'  onClick={()=>props.logout()}>
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" style={{width: '3em', height: '3em'}}>
                    <img src="/img/icons8-sign-out-50.png" width="30px" alt="" />
                  </div>
                  <span className="nav-link-text ms-1">Déconnexion</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>  );
}
 
export default SideBar;