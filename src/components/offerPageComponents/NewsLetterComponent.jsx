import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { URL } from '../../constants/config'
import axios from 'axios'

function NewsLetterComponent(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('') //if any body want he can use this response message for frontend
  const [show, setShow] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(URL._SUBSCRIBE, { email: email })
      .then(res => {
        setMessage(res.data.message)
        setShow(true);
      })
      .catch(ex => {
        setShow(true);
        setMessage(ex.data.message)
      })
    setTimeout(() => setShow(false), 3000);

  }
  // 

  return (
    <Row className="justify-content-center">
      <Col sm="10">
        <Card className="subscribeCard border-0 rounded-0">
          <Card.Body className="text-center pt-5 pb-5">
            <h1>Newsletter</h1>
            <p>
              Sign up to hear from us about new releases, book signings, and events
              </p>
            <Form
              className="d-flex subscribeForm justify-content-center mt-3"
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="subscribeEmail" className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="mr-2"
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="mb-2">
                Subscribe
                </Button>
            </Form>
            {show ?
              <Alert variant={message[0].success ? 'success' : "danger"} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{message[0].success ? 'Thank you!' : 'Opts!'}</Alert.Heading>
                <p>
                  {message[0].message}
                </p>
              </Alert>
              : ''}

          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export {
  NewsLetterComponent
}
