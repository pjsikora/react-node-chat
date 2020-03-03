import React, {useState, useEffect} from 'react';

import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import Convo from "./components/Convo"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from './actions/actions'
import {addMsg} from "./actions/actions"
import {useDispatch} from 'react-redux'
import Chat from "./containers/Chat"
import { AUTH } from './actions/actionTypes';

const messages = []

function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    handleShow();
  }, [])


  const onInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleClose = () => {
    const {name} = input;
    
    if (name && name !== "" ) {
      dispatch({type: "LOGIN", payload: {name}});
      dispatch({type: AUTH});
      setShow(false);
    }
  }
  
  const handleShow = () => setShow(true);


  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Set your name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control 
            onChange={onInputChange}
            type="text" 
            name="name"
            placeholder="Enter your name" />
          <Form.Text className="text-muted">
            Represent your planet
          </Form.Text>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Chat />
    </div>
  );
}

export default App;
