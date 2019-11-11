import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const styles=`

.errorPage .row{height:90vh;align-items:center;}
.errorPageContent h1{font-size: 180px;}
.errorPageContent h2{font-size: 40px;margin-bottom:2rem;}
.errorPageContent ul li{margin-right:1rem;font-size:20px;color:#363636;}
.errorPageContent ul li:last-child{margin-right:0px;}
.errorPageContent ul li a{color:#363636;}
.errorPageContent ul li a:hover{color:#3897cf;}


`

function ErrorPage() {

    return(<>
      <style>
        {styles}
      </style>
      <div className="errorPage">
        <Container className ="mt-5">
          <Row>
            <Col sm={12}>
              <div className="errorPageContent text-center">
                <h1>404</h1>
                <h2>Page Not found</h2>
                <ul className="d-flex justify-content-center">
                  <li><Link to="/"><i class="fas fa-home"></i> HOME</Link></li>
                  <li><Link to="/shop"><i class="fas fa-shopping-cart"></i> Shop</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    
    </>)
}

export default ErrorPage;