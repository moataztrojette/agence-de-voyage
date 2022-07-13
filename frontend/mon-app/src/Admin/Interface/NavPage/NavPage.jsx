import React from 'react'
const NavPage = (props) => {
    return ( <nav aria-label="breadcrumb" style={{marginLeft:"30px"}}>
    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
      <li className="breadcrumb-item text-sm"><a href={() => false} 
 className="opacity-5 text-dark" >Pages</a></li>
      <li className="breadcrumb-item text-sm text-dark active" aria-current="page">{props.name}</li>
    </ol>
  </nav>  );
}
 
export default NavPage;