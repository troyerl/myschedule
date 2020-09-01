import React from 'react';
import Axios from 'axios';

import { Form, Button } from 'react-bootstrap';

export default class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      tableReady: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  };
  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.tableReady) {
      Axios.get(`http://localhost:5000/createUser/${JSON.stringify(this.state)}`)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/auth/home/dashboard');
        }
      });
    }
  };

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
        <Form className="d-flex justify-content-center flex-column" onSubmit={this.onSubmit}>
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
          <Form.Group>
            <label>Email</label>
            <Form.Control type="email" value={this.state.email} onChange={this.handleChange} name="email" className="form-control" required/>
          </Form.Group>
          <div className="text-center">
            <Button type="submit" className="button-base wide-button main-color ripple mt-3">Create Account!</Button>
          </div>
        </Form>
      </div>
    );
  }
}