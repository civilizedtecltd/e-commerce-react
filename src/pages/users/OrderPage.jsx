import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Table} from 'react-bootstrap';
import './assets/css/user.css';
import {Lia} from '../../components/LiComponent/CommonLi'

const OrderPage = () => {
  return (<>

    <div className="allWrapper">
      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container fluid={true}>
          <Row className="justify-content-between">
            <Col>
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header userHeader clearfix" id="header">
        <Container fluid="{true}">
          <Row>
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}

            <Col>
              <nav className="mainMenu mainNav" id="mainNav">
                <ul className="navTabs">
                  <Lia
                  AnchorClass={"active"}
                   Url={'/'}
                   Title={Home}
                  />
                </ul>{/* end of navTabs */}

              </nav>{/* end of Nav */}
              <Link to="#" className="generalLink" id="responsiveMainNavToggler"><i className="fa fa-bars"></i></Link>
              <div className="clearfix"></div>
              <div className="responsiveMainNav"></div>{/* end of Nav */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between align-items-center">
                  <li><Link to="/"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="/"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li>
                    <div className="userLogged d-flex align-items-center">
                      <div className="userAvater"><img src="./assets/images/reviews_avater.jpg" alt="" /></div>
                      <span className="userName">Sam Smith</span>
                    </div>{/* end of userLogged */}
                  </li>{/* end of li */}
                </ul>{/* end of headPopBarList */}
              </div>{/* end of headPopBar */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}

      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <Col sm="2">
              <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                <nav className="userNav">
                  <ul className="userNavBar">
                    <li className="nav-item active">
                      <Link className="nav-link" to="#"><i className="fas fa-clipboard-list"></i> My orders</Link>
                    </li>{/* end of li */}
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-wallet"></i> Payment methods</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-cog"></i> Profile settings</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="far fa-envelope"></i> Email subscription</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-sign-out-alt"></i> Log out</Link>
                    </li>{/* end of li */}

                  </ul>{/* end of userNavBar */}
                </nav>{/* end of userNav */}
              </aside>{/* end of aside */}
            </Col>{/* end of Col */}

            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">

                <section className="myOrderArea secGap clearfix" id="myOrderArea">

                  <Container fluid="{true}">
                    <Row>
                      <Col sm="12">
                        <Card>
                        <Card.Body>
                            <div className="cardHeadDetails clearfix pt-5 text-center">
                              <div className="orderMedia">
                                <img src="assets/images/order_page_icon_img.png" alt="" />
                              </div>{/* end of orderMedia */}
                              
                              <div className="orderSortDes">
                                <h2 className="headTitle mb-3">You don’t have any <span>Orders</span></h2>
                                <p>It’s not a problem. Just choose a category you’re intrested in and<br/> add goods to your cart
                                </p>
                              </div>{/* end of orderSortDes */}
                              <hr className="hrBorder mt-4 mb-4" />

                              <div className="cardContentDetails">
                                <Row>
                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Kindergarten</h3>
                                    <ul className="cardWidgetList text-center">
                                      <li><Link to="#">Pre 1</Link></li>
                                      <li><Link to="#">Pre 2</Link></li>
                                      <li><Link to="#">Pre 3</Link></li>
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}

                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Primary school</h3>
                                    <ul className="cardWidgetList cardWidgetList2 text-center">
                                      <li><Link to="#">Class 1</Link></li>
                                      <li><Link to="#">Class 2</Link></li>
                                      <li><Link to="#">Class 3</Link></li>
                                      <li><Link to="#">Class 4</Link></li>
                                      <li><Link to="#">Class 5</Link></li>
                                      <li><Link to="#">Class 6</Link></li>
                                      <li><Link to="#">Class 7</Link></li>
                                      <li><Link to="#">Class 8</Link></li>
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}

                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Secondary school</h3>
                                    <ul className="cardWidgetList text-center">
                                      <li><Link to="#">Form 1</Link></li>
                                      <li><Link to="#">Form 2</Link></li>
                                      <li><Link to="#">Form 3</Link></li>
                                      <li><Link to="#">Form 4</Link></li>
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}

                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                                    <ul className="cardWidgetList text-center">
                                      <li><Link to="#">Stationery</Link></li>
                                      <li><Link to="#">Stationery</Link></li>
                                      <li><Link to="#"><strong>Bibles</strong></Link></li>
                                      <li><Link to="#">Bibles</Link></li>
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}
                                </Row>{/* end of Row */}
                              </div>{/* end of cardContentDetails */}

                            </div>{/* end of orderHeadDetails */}
                          </Card.Body>{/* end of Card.Body */}
                          
                          <Card.Body className="pt-5">

                            <Table responsive className="cardTable">
                              <thead>
                                <tr>
                                  <th>Product name</th>
                                  <th>Price</th>
                                  <th>Amount</th>
                                  <th>Total</th>
                                  <th>Order date</th>
                                  <th>Order status</th>
                                </tr>
                              </thead>{/* end of thead */}

                              <tbody>
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="tableDate">11.05.2019</span> <span className="tableTime">14:53</span> </td>
                                  <td><span className="stockInfo">In stock</span></td>
                                </tr>{/* end of tr */}
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="tableDate">11.05.2019</span> <span className="tableTime">14:53</span> </td>
                                  <td><span className="stockInfo">DELIVERED</span></td>
                                </tr>{/* end of tr */}
                              </tbody>{/* end of tbody */}

                            </Table>{/* end of Table */}
                          </Card.Body>{/* end of Card.Body */}
                        </Card>{/* end of Card */}
                      </Col>{/* end of Col */}
                    </Row>{/* end of Row */}
                  </Container>{/* end of Container */}

                </section>{/* end of myOrderArea */}
                
              </main>{/* end of mainContent */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of userBodyArea */}


    </div> {/* end of allWrapper */}
   
  </>);
}

export default OrderPage;