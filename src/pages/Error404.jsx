import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ErrorPage() {
    return(
        <Container>
        <Row>
            <Col sm={12}>
                <h1 className='text-center'>404</h1>
                <h2 className="text-center">Page Not found</h2>
            </Col>
        </Row>
     </Container>
    )
}

export default ErrorPage;