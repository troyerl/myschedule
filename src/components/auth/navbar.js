
import React from "react";

import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";

import routes from '../../routes';

const Navbar = props => {
  return (
    <Navbar bg="white" expand="lg" className="d-flex justify-content-between border-bottom">
      <h4 className="title-font" ><Link to={routes.auth.dashboard} style={{color: '#5680E9'}}> My Schedule!</Link></h4>
      <div className="text-right">
        <h5><Link to={routes.auth.settings} style={{color: '#5680E9', fontFamily: 'Arimo, sans-serif', fontWeight: 'bold'}}>{user ? `${user.firstname} ${user.lastname}` : ''}</Link></h5>
      </div>
    </Navbar>
  );
}

export default Navbar;