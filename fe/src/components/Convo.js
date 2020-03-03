import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import filterContent from '../utils/filterContent'

function Convo({messages}) {
  return (
      <Container>
          {messages && messages.length > 0 && messages.map(({from, msg}, idx) => 
            <Row key={idx}>
                <Col  xs={{span:6, offset: 3}}>
                    <p className="text-left"><strong>{from}</strong></p>
                    <Alert 
                        className="text-left" 
                        variant="success"
                        >
                            {msg && <div
                            dangerouslySetInnerHTML={{__html: filterContent(msg)}}>
                        </div>}
                        

                    </Alert>
                </Col>
            </Row>
          )}
      </Container>
  );
}

Convo.propTypes = {
    messages: PropTypes.array.isRequired
}


export default Convo;
