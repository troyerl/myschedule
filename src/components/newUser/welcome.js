import React from 'react';
import './welcome.css';
import '../../css/buttons.css';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
  test() {
    console.log('hello');
  }
  render() {
    return (
    <div style={{height: '100vh', width: '100%', 'backgroundColor': '#5680E9'}} className="d-flex flex-column justify-content-center align-items-center">
      <div style={{right: '0', top: '0', position: 'fixed'}}>
        <svg style={{cursor: 'pointer'}} onClick={this.test} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
          <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
      <h1 className="text-center welcome">Welcome!</h1>
      <Link to='/profile-settings'>
        <button className="button-base ripple mt-3">
          Being Using!
        </button>
      </Link>
    </div>
    )
  }
}