import React,{ useState }from 'react';
import {Row, Col, Card,Form , Button, Alert} from 'react-bootstrap';
import {URL} from '../../constants/config'
import axios from 'axios'

function NewsLetterComponent(props) {
  const [email , setEmail ] = useState('');
  const [message,setMessage] = useState('') //if any body want he can use this response message for frontend
  const [show, setShow] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(URL._SUBSCRIBE,{email:email})
    .then(res=>{
      setMessage(res.data.message)
      return setTimeout(setShow(false),3000)
    })
    .catch(ex=>{
      setMessage(ex.data.message)
      setTimeout(setShow(false),3000)
      return console.log(ex)
    })
    
  }

    return (
      <Row className="justify-content-center">
        <Col sm="10">
          <Card className="subscribeCard border-0 rounded-0">
            <Card.Body className="text-center pt-5 pb-5">
              <h1>Subscribe to our newsletter</h1>
              <p>
                Lorem ipsum dolor sit ament, consecrator advising elite, sed do
                elusion temper
                <br />
                enif ipsum quia volutes quia non nunquam emus
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
              { message ?
                  <Alert variant={message[0].success ? 'success' : "danger" } onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>{message[0].success ? 'Thank you!' : 'Opts!'}</Alert.Heading>
                    <p>
                     {message[0].message}
                    </p>
                  </Alert>
              :''}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
}

export{
    NewsLetterComponent
}
