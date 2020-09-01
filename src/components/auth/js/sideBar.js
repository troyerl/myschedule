import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import '../../../styles/sideBar.css';

import { HouseFill, GearFill, KanbanFill, Calendar } from 'react-bootstrap-icons';

const Side = props => {
    return (
        <div>
            <div className="sidebar-sticky"></div>
            <Nav className="col-md-12 d-none d-md-block white sidebar border-right"
                activeKey="/auth/home/dashboard"
            >
            <Nav.Item>
                <Link to="/auth/home/dashboard" className="item d-flex align-items-center"><HouseFill className="sideBar-icon"/>Dashboard</Link>
            </Nav.Item>
            <Nav.Item className="mt-2">
                <Link to="/auth/home/project-board" className="item"><KanbanFill className="sideBar-icon"/> Project Board</Link>
            </Nav.Item>
            <Nav.Item className="mt-2">
                <Link to="/auth/home/calendar" className="item"><Calendar className="sideBar-icon"/>Calendar</Link>
            </Nav.Item>
            <Nav.Item className="mt-2">
                <Link to="/auth/home/settings" className="item"><GearFill className="sideBar-icon"/> Settings</Link>
            </Nav.Item>
            </Nav>

            </div>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar