import  React from 'react';
import {Form, Button, Table } from "react-bootstrap";
import '../../pages/checkout.css';
import { URL } from '../../constants/config';

const CartsTableComponent = (props) => {

    const handleQuantity = (e) => {
        const itemQty = (e.target.value <= 0 ) ? 1 : e.target.value;
        const itemId  = e.target.id;

        return props.updateQty({
                        id: itemId,
                        qty: itemQty
                    });
    }

    const handleDeleteClick = (e) => {
        return props.onDelete(e.target.id)
    }


    return (
        <Table responsive className="cardTable">
        <thead>
          <tr>
            <th>Goods</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>


        <tbody>
          {props.items.map((item, index) => (<tr key={index}>
            <td>
              <div className="cartProductDetails d-flex flex-fill align-items-center">
                <div className="cartProductMedia bgGray ">
                  <img src={item.cover_images.img_1} alt="" />
                </div>
                <div className="cartProductTitle">
                  <h3>
                    {item.name}
                  </h3>
                </div>
              </div>
            </td>

            <td className="aligneMiddle" id={`price-${item.id}`}>${item.price}</td>

            <td className="cartQntN aligneMiddle">
              <Form.Control type="number" placeholder="1" id={item.id} value={item.quantity} onChange={handleQuantity} />
            </td>

            <td className="aligneMiddle" id={`tp-${item.id}`}>${item.amountPrice}</td>

            <td className="aligneMiddle">
              <Button className="btn btn-danger btnItemDelete" id={item.id} onClick={handleDeleteClick} >
                Delete <i className="fas fa-times"></i>
              </Button>
            </td>

          </tr>
          ))}

        </tbody>
      </Table>
    );
}

export default CartsTableComponent;
