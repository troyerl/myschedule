import React from 'react';
import Axios from 'axios';

import { Form, Button, Alert } from 'react-bootstrap';

import ConnectAccounts from './connectAccounts';

export default class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      tableReady: false,
      showAccountsConnect: false,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showConnectAccounts = this.showConnectAccounts.bind(this);

  };
  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      error: false
    })
    if (this.state.tableReady && this.state.firstname && this.state.lastname) {
      Axios.get(`http://localhost:5000/createUser/${JSON.stringify(this.state)}`)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/auth/home/dashboard');
        }
      });
    } else {
      this.setState({
        error: true
      })
    }
  };

  showConnectAccounts(e) {
    e.preventDefault();
    this.setState({
      showAccountsConnect: true
    });
  }

  showError() {
    return this.state.error ? <Alert variant="danger" className="text-center">Required information is needed to proceed</Alert> : ''
  }

  componentDidMount() {
    Axios.get(`http://localhost:5000/createUserTable`)
      .then(res => {
        if (res.status === 200) {
          this.setState({tableReady: true})
        }
      });
  }

  render() {
    return (
      <div style={{height: '100vh', width: '100%', 'backgroundColor': '#5680E9'}} className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center welcome">Profile Info</h1>
        <Form className="d-flex justify-content-center flex-column">
          <Form.Group className="mt-3 d-flex">
            <div>
              <label>First Name</label>
              <Form.Control type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" className="form-control pa-3" required/>
            </div>
            <div className="ml-3">
              <label>Last Name</label>
              <Form.Control type="text" value={this.state.lastname} onChange={this.handleChange} name="lastname" className="form-control" required/>
            </div>
          </Form.Group>
          {this.showError()}
          <div className="text-center d-flex flex-column align-items-center">
            <Button onClick={this.showConnectAccounts} type="button" className="button-base wide-button main-color ripple mt-3">Connect Accounts</Button>
            <Button onClick={this.onSubmit} type="submit" className="button-base wide-button main-color ripple mt-3">Next!</Button>
          </div>
        </Form>
        <ConnectAccounts showModal={this.state.showAccountsConnect}/>
      </div>
    );
  }
}