import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import PaypalCheckoutButton from '../components/paymentMethodComponent/PaypalCheckoutButton'

const CheckoutPage = ({
  product = {
    price: 777.77,
    name: 'comfy chair',
    description: 'fancy chair, like new',
    image:''
  }}) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="m-auto">
            <Table striped bordered hover responsive="sm md lg xl">
              <thead>
                <th className="text-center" width="5%">SL</th>
                <th className="text-center" width="40%">Product Name</th>
                <th className="text-center" width="35%">Details</th>
                <th className="text-center" width="10%">Quantity</th>
                <th className="text-center" width="10%">Total</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    1
                  </td>
                  <td>

                  </td>
                  <td></td>

                  <td>
                    <input type="number" name="quantity" id="quantity" min="1"/>
                  </td>
                    
                  <td>KE</td>
                </tr>
              </tbody>
            </Table>
            <div className="text-right">
              <PaypalCheckoutButton product={product}/>
            </div>
          </div>
        </Col>
      </Row>
   </Container>
  );
}

export default CheckoutPage;