import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import PaypalCheckoutButton from '../components/paymentMethodComponent/PaypalCheckoutButton';

const CheckoutPage = () => {
  const products = [
    {
     price: 30.40,
     name: 'comfy chair',
     description: 'fancy chair, like new',
     quantity:1,
     image:'',

    },
    {
     price: 30.40,
     name: 'comfy chair',
     description: 'fancy chair, like new',
     quantity:1,
     image:'',

    },

    ]

  return (
    <Container>
      <Row>
        <Col>
          <div className="m-auto">
             <h4 className="text-uppercase mt-5">Shop Cart</h4>
            <div className="mt-5">
            <Table responsive="sm md lg xl" className="light">
              <thead>
                <th className="text-center" width="5%">###</th>
                <th className="text-center" width="45%">Product Name</th>
                <th className="text-center" width="35%">Details</th>
                <th className="text-center" width="5%">Quantity</th>
                <th className="text-center" width="10%">Total</th>
              </thead>
              <tbody>
                {products.map((product,index)=>{
                  return(
                    <tr>
                        <td>
                         <i title="remove" class="fas fa-window-close"></i>
                        </td>
                         <td>
                          <label>{product.name}</label>
                          <img src={product.image} alt=""/>
                        </td>
                        <td>{product.description}</td>
                        <td>
                          <input className="text-center" type="number" name="quantity" id="quantity" min="1" value={product.quantity}/>
                        </td>
                        <td>{product.total}KE</td>
                  </tr>
                  )
                })}
              </tbody>
            </Table>
            </div>
            <div className="text-right">
              <PaypalCheckoutButton product={products[0]}/>
            </div>
          </div>
        </Col>
      </Row>
   </Container>
  );
}

export default CheckoutPage;