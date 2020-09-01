import React from 'react';

import Axios from 'axios';
import { connect }  from 'react-redux';
import { withRouter } from "react-router";
import { Route, Switch, Link } from 'react-router-dom';
import actionType from '../../store/actionTypes';

import '../../styles/buttons.css';
import '../../styles/fonts.css';
import { Navbar } from "react-bootstrap";

import Sidebar from './sideBar';
import Dashboard from './dashboard/dashboard';
import Settings from './settings/settings';
import ProjectBoard from './ProjectBoard/projectBoard';
import Calendar from './Calendar/calendar';

import routes from '../../routes';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    Axios.get('http://localhost:5000/getUser')
      .then(res => {
        this.props.createUser(res.data[0]);
        if (res.data.length === 0) {
          this.props.history.push(routes.newUser.welcome);
        }
        this.setState({
          user: res.data[0]
        });
      }).catch(err => {
        console.log(err);
      })
  };

  render() {
    const user = this.props.user;
    return (
      <div>
        <Navbar bg="white" expand="lg" className="d-flex justify-content-between border-bottom">
          <h4 className="title-font" ><Link to={routes.auth.dashboard} style={{color: '#5680E9'}}> My Schedule!</Link></h4>
          <div className="text-right">
            <h5><Link to={routes.auth.settings} style={{color: '#5680E9', fontFamily: 'Arimo, sans-serif', fontWeight: 'bold'}}>{user ? `${user.firstname} ${user.lastname}` : ''}</Link></h5>
          </div>
        </Navbar>
        <div className="d-flex">
          <div id="sidebar-wrapper">      
            <Sidebar/>
          </div>
          <div id="page-content-wrapper" style={{'flexGrow': 'unset', 'paddingLeft': 0, 'paddingRight': 0}}>
            <Switch>
              <Route path={routes.auth.dashboard} component={Dashboard}/>
              <Route path={routes.auth.projectBoard} component={ProjectBoard}/>
              <Route path={routes.auth.settings} component={Settings}/>
              <Route path={routes.auth.calendar} component={Calendar}/>
            </Switch>
          </div> 
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, prevProps) => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: (userInfo) =>  dispatch({type: actionType.auth.CREATE_USER, val: userInfo})
  }
};
const HomePage = withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);