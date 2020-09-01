import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import '../../styles/sideBar.css';

import { HouseFill, GearFill, KanbanFill, Calendar } from 'react-bootstrap-icons';

import routes from '../../routes';

const Side = props => {
    return (
        <div>
            <div className="sidebar-sticky"></div>
            <Nav className="col-md-12 d-none d-md-block white sidebar border-right">
            <Nav.Item>
                <Link to={routes.auth.dashboard} className="item d-flex align-items-center"><HouseFill className="sideBar-icon"/>Dashboard</Link>
            </Nav.Item>
            <Nav.Item className="mt-2">
                <Link to={routes.auth.projectBoard} className="item"><KanbanFill className="sideBar-icon"/>Project Board</Link>
            </Nav.Item>
            <Nav.Item className="mt-2">
                <Link to={routes.auth.calendar} className="item"><Calendar className="sideBar-icon"/>Calendar</Link>
            </Nav.Item>
            <Nav.Item className="mt-2">
                <Link to={routes.auth.settings} className="item"><GearFill className="sideBar-icon"/>Settings</Link>
            </Nav.Item>
            </Nav>

            </div>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar