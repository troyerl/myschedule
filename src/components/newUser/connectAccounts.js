import React, { useState, useEffect } from 'react';

import axios from 'axios'

import { Modal, Button } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import InputCode from './inputCode';

const ConnectAccounts = props => {
  const [show, setShow] = useState(props.showModal);
  const [googleCalendar, setGoogleCalendar] = useState(false);
  const [showCodeInput, toggleCodeInput] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    setShow(props.showModal);
  }, [props]);

  const handleClose = () => setShow(false);

  const connectAccount = (e) => {
    setService(e.target.innerText);
    toggleCodeInput(true);
    axios.get(`http://localhost:5000/connectAccount/${e.target.innerText}`)
      .then(res => {;
        popupWindow(res.data, 'Auth', window, 500, 500);
      })
  };

  const showSavedConnection = () => {
    toggleCodeInput(false);
    setGoogleCalendar(true);
  }

  const popupWindow = (url, windowName, win, w, h) => {
    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
  }

  const closeCodeInput = () => {
    toggleCodeInput(false);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Accounts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <Button variant="outline-secondary" className="d-flex align-items-center" disabled={googleCalendar} onClick={connectAccount}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 48 48"
                style={{fill: '#000000'}}><path fill="#c7c7c7" fillRule="evenodd" d="M38,5c-6.302,0-21.698,0-28,0C8.895,5,8,5.895,8,7 c0,3.047,0,3,0,3h32c0,0,0,0.047,0-3C40,5.895,39.105,5,38,5z M14,8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1 C15,7.552,14.552,8,14,8z M34,8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C35,7.552,34.552,8,34,8z" clipRule="evenodd"></path><path fill="#1976d2" fillRule="evenodd" d="M44,11c0.103-0.582-1.409-2-2-2C34.889,9,13.111,9,6,9 c-1,0-2.103,1.418-2,2c0.823,4.664,3,15,3,15h34C41,26,43.177,15.664,44,11z" clipRule="evenodd"></path><path fill="#1e88e5" fillRule="evenodd" d="M41,26H7c0,0-2.177,10.336-3,15c0,1.146,0.792,2,2,2 c7.111,0,28.889,0,36,0c0.591,0,2-0.5,2-2C43.177,36.336,41,26,41,26z" clipRule="evenodd"></path><path fill="#fafafa" fillRule="evenodd" d="M20.534 26c.984.325 1.687.85 2.105 1.557.433.732.65 1.55.65 2.457 0 1.582-.519 2.826-1.556 3.733-1.037.906-2.363 1.36-3.977 1.36-1.582 0-2.892-.427-3.93-1.282-1.038-.855-1.536-2.014-1.497-3.476l.036-.072h2.242c0 .914.28 1.642.841 2.182.56.541 1.33.811 2.308.811.994 0 1.773-.27 2.337-.811.564-.541.847-1.34.847-2.397 0-1.073-.25-1.864-.751-2.373-.501-.509-1.292-.763-2.373-.763h-2.051V26H20.534zM31.637 26H33.986000000000004V34.856H31.637z" clipRule="evenodd"></path><path fill="#e0e0e0" fillRule="evenodd" d="M14.727 22.036h-2.254l-.024-.072c-.04-1.312.435-2.427 1.425-3.345.99-.918 2.284-1.377 3.882-1.377 1.606 0 2.886.427 3.84 1.282.954.855 1.431 2.073 1.431 3.655 0 .716-.217 1.429-.65 2.141-.433.712-1.083 1.254-1.95 1.628L20.534 26h-4.77v-.911h2.051c1.042 0 1.779-.26 2.212-.781.433-.521.65-1.246.65-2.176 0-.994-.246-1.749-.739-2.266-.493-.517-1.22-.775-2.182-.775-.914 0-1.648.268-2.2.805C15.022 20.414 14.746 21.098 14.727 22.036zM33.986 26L31.637 26 31.637 19.782 28.083 19.83 28.083 18.136 33.986 17.492z" clipRule="evenodd"></path><path fill="#1976d2" fillRule="evenodd" d="M6 9c-1.438 0-2.103 1.418-2 2 .823 4.664 3 15 3 15M41 26c0 0 2.177-10.336 3-15 0-1.625-1.409-2-2-2" clipRule="evenodd"></path></svg>
                <span className="pl-1" >Google Calendar</span> 
            </Button>
            {googleCalendar ? <CheckCircle className="ml-3" color="green" size={25}/> : ''}
          </div>
          
        </Modal.Body>
      </Modal>
      <InputCode showCodeInput={showCodeInput} closeCodeInput={closeCodeInput} service={service} showSavedConnection={showSavedConnection}/>
    </div>
  )
  
};

export default ConnectAccounts;