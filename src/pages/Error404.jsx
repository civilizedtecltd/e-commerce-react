import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ErrorPage() {
    return(
    <div className="errorPage">
        <Container className ="mt-5">
            <Row>
                <Col sm={12}>
                    <h1 className='text-center'>404</h1>
                    <h2 className="text-center">Page Not found</h2>
                    <div className="text-center" style={{fontSize:40}}>
                    <Link to="/">GO HOME</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    
    )
}

export default ErrorPage;