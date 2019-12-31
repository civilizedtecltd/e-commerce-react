import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Container, Row, Col, Card, Table} from 'react-bootstrap';
import  HeaderComponent from "../../components/header/Header";
import  MobileHeader from "../../components/header/MobileHeader";
import UserNav from "../../components/UserNav/UserNav";

import './assets/css/user.css';
import orderIcon from '../assets/images/order_icon.png'
import PageLoader from "../../components/pageLoader/PageLoaderComponent";
import MegaMenu from "../../components/MegaMenuComponents/MegaMenuComponent";

const OrderPage = (props) => {
  const totalItem = props.cart.length;
  const totalFavorite = props.favorite.items.length;

  const orders = (props.orders)? props.orders : [];

  console.log(orders);

  return (<>
    <PageLoader loading={props.favorite.pending}/>
    <div className="allWrapper">
    <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
          menuActive={true}
        />
      <MobileHeader />
      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <UserNav />

             <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">
                <section className="myOrderArea secGap clearfix" id="myOrderArea">
                  <Container fluid={true}>
                    <Row>
                      <Col sm="12">
                        <Card>
                          { (orders.length === 0) ?
                            <Card.Body>
                                <div className="cardHeadDetails clearfix pt-5 text-center">
                                    <div className="orderMedia">
                                        <img src={orderIcon} alt="" />
                                    </div>

                                    <div className="orderSortDes">
                                        <h2 className="headTitle mb-3 mt-3">You don’t have any <span>Orders</span></h2>
                                        <p>It’s not a problem. Just choose a category you’re interested in and<br/> add goods to your cart
                                        </p>
                                    </div>
                                    <hr className="hrBorder mt-4 mb-4" />
                                    <div className="cardContentDetails">
                                        <Row>
                                          <MegaMenu/>
                                        </Row>
                                    </div>
                                </div>
                          </Card.Body>

                          :

                          <Card.Body className="pt-5">
                                <Table responsive className="cardTable">
                                    <thead>
                                        <tr>
                                        <th>Order code</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        <th>Total</th>
                                        <th>Order date</th>
                                        <th>Order status</th>
                                        </tr>
                                    </thead>{/* end of thead */}

                                    <tbody>
                                        {orders.map(order => {
                                                    return (
                                                        <tr>
                                                            <td>{order.order_code}</td>
                                                            <td><Link to={`/product/${order.book_id}`}>{order.name}</Link></td>
                                                            <td>${order.price}</td>
                                                            <td>{order.quantity}</td>
                                                            <td>${order.total}</td>
                                                            <td><span className="tableDate">{order.created_at}</span> <span className="tableTime">14:53</span> </td>
                                                            <td><span className="stockInfo">{order.status}</span></td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                            }
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

const mapStateToProps = state => ({
  cart: state.shop.cart,
  favorite: state.favorite,
  orders: state.auth.user.order
})

export default connect(mapStateToProps , null)(OrderPage);
