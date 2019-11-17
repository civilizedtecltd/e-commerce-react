import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table
} from "react-bootstrap";

//Product Images
import productImage1 from "../assets/images/books/book_img_01.jpg";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import {HeaderComponent, MobileHeader} from "../components/header/Header";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
const CartPage = () => {
  const cartItem = JSON.parse(window.localStorage.getItem('session'));
  let totalItem= (cartItem !== null) ? (cartItem.length) : 0;
  return (
    <>
      <div className="allWrapper">
        <HeaderComponent cartItem={ totalItem } />
        <MobileHeader />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="sectionBreadcrumb secGap clearfix pb-0"
            id="sectionBreadcrumb"
          >
            <Container>
              <Row>
                <Col>
                <BreadCrumb
                  url='/'
                  option1='Home'
                  option2="Cart"
                />
                </Col>
              </Row>
            </Container>
            {/* end of Container */}
          </section>
          {/* end of Breadcrumb */}

          <section className="chooseCategory clearfix" id="chooseCategory">
            <Container>
              <Row>
                <Col>
                  <div className="contentArea text-center mt-5 mb-5">
                    <h2 className="sectionTitle mb-3">
                      Your cart is <span>empty</span>
                    </h2>
                    <p>
                      It’s not a problem. Just choose a category you’re
                      interested in and add goods to favorites list
                    </p>
                  </div>
                  {/* end of contentArea */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}

              <Row>
                <Col>
                  <Card className="border-0">
                    <Card.Body className="p-0">
                      <div className="cardContentDetails pt-5 pb-5 mb-5 bgGray clearfix">
                        <Row>
                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Kindergarten
                            </h3>
                            <ul className="cardWidgetList text-center">
                              <li>
                                <Link to="#">Pre 1</Link>
                              </li>
                              <li>
                                <Link to="#">Pre 2</Link>
                              </li>
                              <li>
                                <Link to="#">Pre 3</Link>
                              </li>
                            </ul>
                            {/* end of cardWidgetList */}
                          </Col>
                          {/* end of Col */}

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Primary school
                            </h3>
                            <ul className="cardWidgetList cardWidgetList2 text-center">
                              <li>
                                <Link to="#">Class 1</Link>
                              </li>
                              <li>
                                <Link to="#">Class 2</Link>
                              </li>
                              <li>
                                <Link to="#">Class 3</Link>
                              </li>
                              <li>
                                <Link to="#">Class 4</Link>
                              </li>
                              <li>
                                <Link to="#">Class 5</Link>
                              </li>
                              <li>
                                <Link to="#">Class 6</Link>
                              </li>
                              <li>
                                <Link to="#">Class 7</Link>
                              </li>
                              <li>
                                <Link to="#">Class 8</Link>
                              </li>
                            </ul>
                            {/* end of cardWidgetList */}
                          </Col>
                          {/* end of Col */}

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">
                              Secondary school
                            </h3>
                            <ul className="cardWidgetList text-center">
                              <li>
                                <Link to="#">Form 1</Link>
                              </li>
                              <li>
                                <Link to="#">Form 2</Link>
                              </li>
                              <li>
                                <Link to="#">Form 3</Link>
                              </li>
                              <li>
                                <Link to="#">Form 4</Link>
                              </li>
                            </ul>
                            {/* end of cardWidgetList */}
                          </Col>
                          {/* end of Col */}

                          <Col sm="3">
                            <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                            <ul className="cardWidgetList text-center">
                              <li>
                                <Link to="#">Stationery</Link>
                              </li>
                              <li>
                                <Link to="#">Stationery</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <strong>Bibles</strong>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">Bibles</Link>
                              </li>
                            </ul>
                            {/* end of cardWidgetList */}
                          </Col>
                          {/* end of Col */}
                        </Row>
                        {/* end of Row */}
                      </div>
                      {/* end of cardContentDetails */}
                    </Card.Body>
                    {/* end of Card.Body */}
                  </Card>
                  {/* end of Card */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}
            </Container>
            {/* end of Container */}
          </section>
          {/* end of chooseCategory */}

          <section className="cartSection clearfix" id="cartSection">
            <Container>
              <Row>
                <Col>
                  <Card className="table-responsive border-0 cartTableBody">
                    <Card.Body className="p-0">
                      <Table responsive className="cardTable">
                        <thead>
                          <tr>
                            <th>Good</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th></th>
                          </tr>
                          {/* end of tr */}
                        </thead>
                        {/* end of thead */}

                        <tbody>
                          <tr>
                            <td>
                              <div className="cartProductDetails d-flex flex-fill align-items-center">
                                <div className="cartProductMedia bgGray ">
                                  <img src={productImage1} alt="" />
                                </div>
                                {/* end of cartProductTitle */}

                                <div className="cartProductTitle">
                                  <h3>
                                    Lorem ipsum dolor sit ament, connecter
                                  </h3>
                                </div>
                                {/* end of cartProductTitle */}
                              </div>
                              {/* end of td */}
                            </td>
                            {/* end of td */}
                            <td>$16.00</td>
                            <td className="cartQntN">
                              <Form.Control type="number" placeholder="1" />
                            </td>
                            <td>$16.00</td>
                            <td>
                              <Button className="btn">
                                Delete <i className="fas fa-times"></i>
                              </Button>
                            </td>
                          </tr>
                          {/* end of tr */}

                          <tr>
                            <td>
                              <div className="cartProductDetails d-flex flex-fill align-items-center">
                                <div className="cartProductMedia bgGray ">
                                  <img src={productImage1} alt="" />
                                </div>
                                {/* end of cartProductTitle */}

                                <div className="cartProductTitle">
                                  <h3>
                                    Lorem ipsum dolor sit ament, connecter
                                  </h3>
                                </div>
                                {/* end of cartProductTitle */}
                              </div>
                              {/* end of td */}
                            </td>
                            {/* end of td */}
                            <td>$16.00</td>
                            <td className="cartQntN">
                              <Form.Control type="number" placeholder="1" />
                            </td>
                            <td>$16.00</td>
                            <td>
                              <Button className="btn">
                                Delete <i className="fas fa-times"></i>
                              </Button>
                            </td>
                          </tr>
                          {/* end of tr */}
                        </tbody>
                        {/* end of tbody */}
                      </Table>
                      {/* end of Table */}
                    </Card.Body>
                    {/* end of Card.Body */}
                  </Card>
                  {/* end of Card */}
                </Col>
                {/* end of Row */}
              </Row>
              {/* end of Row */}

              <Row>
                <Col>
                  <Button className="btnGraySm">
                    Delete all <i className="fas fa-times"></i>
                  </Button>
                </Col>
                {/* end of Col */}

                <Col>
                  <Form className="form-inline cartPromo justify-content-end">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Promo Code" />
                    </Form.Group>
                    {/* end of Form.Group */}

                    <Button type="submit" className="ml-2">
                      Apply
                    </Button>
                  </Form>
                  {/* end of Row */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}

              <Row className="justify-content-end text-right mt-4 mb-5">
                <Col sm="4">
                  <div className="cartProductPrice">
                    <ul className="cartPriceList">
                      <li>
                        Price.....................................................
                        <span className="pPrice">$50.00</span>
                      </li>
                      <li>
                        Delivery.............................................
                        <span className="pPrice">$00.00</span>
                      </li>
                      <li>
                        Total.....................................................
                        <span className="pPrice">$50.00</span>
                      </li>
                    </ul>
                    {/* end of cartPriceList */}

                    <Button className="mt-3">Checkout</Button>
                  </div>
                  {/* end of cartProductPrice */}
                </Col>
                {/* end of Col */}
              </Row>
              {/* end of Row */}
            </Container>
            {/* end of Container */}
          </section>
          {/* end of cartSection */}

          <section
            className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
            id="mailSubscribe"
          >
            <Container className="container">
              <NewsLetterComponent />
            </Container>
            {/* end of Container */}
          </section>
          {/* end of mailSubscribe */}
        </main>
        {/* end of allWrapper */}

        <FooterComponent />
      </div>
      {/* end of allWrapper */}
    </>
  );
};

export default CartPage;
