import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addMsg} from "../actions/actions"

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Convo from "../components/Convo";
// import store from "../store"
import "bootstrap/dist/css/bootstrap.min.css";


function Chat() {
  const [inputValue, setInputValue] = useState('');

  const messages = useSelector(state => state.chat.msgs);
  const name = useSelector(state => state.chat.user);
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;
    setInputValue(value);
  };

  const sendInformation = () => {
    if (inputValue !== "") {

        dispatch(addMsg({msg: inputValue, from: name}));
        setInputValue('')
    }
  };

  return (
    <div className="App">
      <Convo messages={messages} />
      <div className="messageSender">
        <Container>
          <Row>
            <Col xs={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    value={inputValue}
                    onChange={onChange} />
              </Form>
              <Button block onClick={sendInformation}>
                Send
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Chat;
