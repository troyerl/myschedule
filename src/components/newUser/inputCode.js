import React, { useState } from 'react';

import axios from 'axios';

import { Modal, Button, Form } from 'react-bootstrap';

const InputCode = props => {
  const [code, setCode] = useState('')
  const connectWithCode = (e) => {
    e.preventDefault();
    console.log('test');
    axios.post(`http://localhost:5000/connectWithCode`, {
      service: props.service,
      code
    }).then(res => {
      props.showSavedConnection();
    });
  }
  return (
    <Modal show={props.showCodeInput} onHide={props.closeCodeInput} centered>
      <Modal.Header closeButton>
        <Modal.Title>Input Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center justify-content-center w-100 flex-column">
          <Form.Label className="text-center w-100 mb-3">Input code provided by authentication below</Form.Label>
          <Form.Control type="email" placeholder="Code" className="mb-3" value={code} onChange={e => {setCode(e.target.value)}} />
          <Button variant="secondary" className="button-base ripple wide-button" onClick={connectWithCode}>
            Connect
          </Button>
        </div> 
      </Modal.Body>
    </Modal>
  )
}

export default InputCode;