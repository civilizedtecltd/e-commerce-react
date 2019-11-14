import React  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import CheckoutTab from './CheckoutTab';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
// Book Images
import bookImage1 from "../assets/images/books/book_img_01.jpg";
import './checkout.css'
const CheckoutPage = () => {

  return (
    <>
      <div className="allWrapper bgGray">
        <header className="header clearfix border-0 pt-5 pb-5" id="header">

        <Container>
              <Row>
                <Col>
                <BreadCrumb
                  url='/'
                  option1='Home'
                  option2="Checkout"
                />
                </Col>
              </Row>
            </Container>
        </header>
        {/* end of header */}

        <main className="mainContent clearfix" id="mainContent">
          <section
            className="checkoutProductDetails clearfix pt-5 pb-5"
            id="checkoutProductDetails"
          >
            <Container>
              <Card className="border-0">
                <Card.Body>
                  <Row>
                    <Col sm="8">
                      <div className="productCartList webScrollbar">
                        <div className="productCartSingle d-flex align-items-center mb-2">
                          <div className="cartProductMedia bgGray">
                            <img src={bookImage1} alt="" />
                          </div>
                          {/* end of productCartSingle */}

                          <div className="cartProductDes pl-3">
                            <h3>
                              <Link to="#">
                                Lorem ipsum dolor sit ament, consenter
                              </Link>
                            </h3>
                            <p>
                              Price <span className="price">$16.00</span>
                            </p>
                            <p>
                              Price <span className="qut">1</span>
                            </p>
                            <p>
                              Total <span className="totalPrice">$16.00</span>
                            </p>
                          </div>
                          {/* end of productDes */}
                        </div>
                        {/* end of cartProductDes */}

                        <div className="productCartSingle d-flex align-items-center mb-2">
                          <div className="cartProductMedia bgGray">
                            <img src={bookImage1} alt="" />
                          </div>
                          {/* end of cartProductMedia */}

                          <div className="cartProductDes pl-3">
                            <h3>
                              <Link to="#">
                              Lorem ipsum dolor sit ament, consenter
                              </Link>
                            </h3>
                            <p>
                              Price <span className="price">$16.00</span>
                            </p>
                            <p>
                              Price <span className="qut">1</span>
                            </p>
                            <p>
                              Total <span className="totalPrice">$16.00</span>
                            </p>
                          </div>
                          {/* end of productDes */}
                        </div>
                        {/* end of productCartSingle */}
                      </div>
                      {/* end of productCartList */}
                    </Col>
                    {/* end of Col */}

                    <Col className="align-self-end">
                      <div
                        className="cartProductValue clearfix"
                        id="cartProductValue"
                      >
                        <ul className="productValue text-right">
                          <li>
                            <strong>Price:</strong> $50.00
                          </li>
                          <li>
                            <strong>Delivery:</strong> $00.00
                          </li>
                          <li>
                            <strong>Total:</strong> $50.00
                          </li>
                        </ul>
                        {/* end of productValue */}
                      </div>
                      {/* end of cartProductValue */}
                    </Col>
                    {/* end of Col */}
                  </Row>
                  {/* end of Row */}
                </Card.Body>
                {/* end of Card.Body */}
              </Card>
              {/* end of Card */}
            </Container>
            {/* end of Container */}
          </section>
          {/* end of checkoutProductDetails */}

          <section
            className="checkoutInfoDetails pb-5 clearfix"
            id="checkoutInfoDetails"
          >
           <CheckoutTab/>
          </section>
          {/* end of checkoutInfoDetails */}
        </main>
        {/* end of mainContent */}
      </div>
      {/* end of allWrapper */}
    </>
  );
};

export default CheckoutPage;
