import React from 'react';

import { connect }  from 'react-redux';

import actionType from '../../../../store/actionTypes';

import '../../../../styles/background-colors.css';
import '../../../../styles/buttons.css';

import { Card, Form, Button } from 'react-bootstrap';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      user: props.user,
      defaultUser: props.user,
    };

    this.checkOnSave = this.checkOnSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
  };

  checkOnSave(e) {    
    e.preventDefault();
    if (e.target.value) {
      this.props.createUser(this.state.user);
      this.setState({
        defaultUser: this.state.user,
      })
    }
    this.setState({
      disabled: !this.state.disabled,
    })
  };

  onChange(e) {
    e.preventDefault();
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value.trim()
      }
    })  
  };

  showCancelButton() {
    return this.state.disabled ? '' : <Button variant="danger" className="button-base ripple" onClick={this.onCancel}>Cancel</Button>;
  };

  onCancel() {
    if (this.state.defaultUser !== this.state.user) {
      this.setState({
        user: this.state.defaultUser,
        disabled: true
      })
    }
  };

  render() {
    const { user } = this.state;
    return (
      <div className="w-100 h-100 background d-flex flex-column align-content-center">
        <Card style={{ width: '95%' }} className="mx-3 mt-3">
          <Card.Header style={{ backgroundColor: '#5680E9' }} as="h5" className="text-white">Account</Card.Header>
          <Form className="ml-3 my-3">
            <Form.Group controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstname" value={user ? user.firstname : ''} onChange={this.onChange} placeholder="Enter your name" disabled={this.state.disabled}/>
            </Form.Group>

            <Form.Group controlId="usersName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastname" value={user ? user.lastname : ''} onChange={this.onChange} placeholder="Enter your name" disabled={this.state.disabled}/>
            </Form.Group>

            <Form.Group controlId="usersEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={user ? user.email : ''} onChange={this.onChange} placeholder="Enter email" disabled={this.state.disabled}/>
            </Form.Group>

            <Button className="button-base main-color ripple px-5" type="submit" value={this.state.disabled} onClick={this.checkOnSave}>
              {this.state.disabled ? 'Edit' : 'Save'}
            </Button>
            {this.showCancelButton()}
          </Form>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);