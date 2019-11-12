import React from 'react';
import {Row, Col, Card,Form , Button} from 'react-bootstrap';

function NewsLetterComponent() {
    return (
        <Row className="justify-content-center">
        <Col sm="10">
          <Card className="subscribeCard border-0 rounded-0">
            <Card.Body className="text-center pt-5 pb-5">
              <h1>Subscribe to our newsletter</h1>
              <p>Lorem ipsum dolor sit ament, consecrator advising elite, sed do elusion temper<br /> enif ipsum  quia volutes quia non nunquam emus</p>

              <Form className="d-flex subscribeForm justify-content-center mt-3">

                <Form.Group controlId="mailSubscribe" className="mb-2">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>{/* end of Form.Group */}

                <Button type="submit" className="mb-2 ml-3">Subscribe</Button>

              </Form>{/* end of Form */}
            </Card.Body>{/* end of Card.Body */}
          </Card>{/* end of Card */}
        </Col>{/* end of Col */}
      </Row>
    )
}

export{
    NewsLetterComponent
}
