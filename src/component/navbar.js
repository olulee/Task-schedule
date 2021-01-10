import React, { Component } from 'react';
import {Link}from 'react-router-dom';
class Navbar extends Component {
    // state = {  }
    render() {
      // console.log("navbar") 
        return ( 
          <React.Fragment>
              {/* <nav className="navbar navbar-default navbar-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav"> */}
      {/* <li className="active"><a href="#">Home</a></li> */}
      {/* <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/about/1">About</Link></li>
      <li><Link to="/about/2">Another About</Link></li> */}
      {/* <li><a href="#">Page 3</a></li> */}
    {/* </ul>
  </div>
</nav> */}

<nav className="navbar navbar-expand-md bg-light">
  <Link className="navbar-brand" to ="/">Market </Link>
  <button className="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    <li className="active pl-2"><Link to="/">Home</Link></li>
      <li className='pl-2'><Link to="/about/1">About</Link></li>
      {/* <li><Link to="form">Form</Link></li> */}
      {/* <li><Link to="/effect">Effect</Link></li> */}
      {/* <li><Link to="formassign">formassign</Link></li> */}
      {/* <li className="float-right"><Link to="dashboard">Dashboard</Link></li> */}
    </ul>
  </div>  
</nav>
          </React.Fragment>  
         );
    }
}
 
export default Navbar;