import React from 'react';
import '../../styles/welcome.css';
import '../../styles/buttons.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Button } from 'react-bootstrap';

export default class Welcome extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000/checkUser')
      .then(res => {
        if (res.data.length > 0) {
          this.props.history.push('/auth/home/dashboard')
        }
      });
  };

  render() {
    return (
      <div style={{height: '100vh', width: '100%', 'backgroundColor': '#5680E9'}} className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center welcome">Welcome!</h1>
        <Link to='/profile-settings'>
          <Button className="button-base wide-button main-color ripple mt-3">
            Being Using!
          </Button>
        </Link>
      </div>
    )
  }
}