import React from "react";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import { NewsLetterComponent } from "../../components/offerPageComponents/NewsLetterComponent";
import TermConditionsComponent from '../../components/terms/TermConditionsComponent'
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { connect } from "react-redux";
// import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const DeliveryDetails = (props) => {
    const totalItem = props.cart.length
    const favoriteItem = props.favorite.items;


    return (<>
        <div className="allWrapper">

            <HeaderComponent
                favorite_item={favoriteItem.length}
                cartItem={totalItem}
            />
            <MobileHeader
                favorite_item={favoriteItem.length}
                cartItem={totalItem}
            />
            <main className="mainContent clearfix" id="mainContent">

                <section className="helpContentArea secGap clearfix" id="helpContentArea">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card helpNavBar">
                                    <div className="card-body">
                                        <h3 className="sectionTitle">Help</h3>
                                        <ul className="helpNavList mt-3">
                                            <TermConditionsComponent />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="helpContentArea">
                                <p><h2>Delivery Policy</h2>
                                <p>This page describes <a href="https://abookstore.co.ke" target="_blank">https://abookstore.co.ke</a> policy on delivery&nbsp;and refunds for all products<br />purchased through this website. We endeavor to maintain high standards of quality in<br />serving our customers in order to achieve excellence and customer satisfaction. Contact<br />us&nbsp;with any queries that are not addressed below.</p></p>
                                    <br/>
                                    <h2>Delivery Details</h2>
                                    <div className="helpPara mt-3">
                                        <ol style={{ listStyleType: 'decimal', fontSize: 17, marginLeft: 20 }} >
                                            <li>Delivery&nbsp;within Nairobi will incur a delivery&nbsp;cost dependent on the region which shall<br />
    be communicated at the time the customer makes the order.</li>
                                            <li>Orders that are split between multiple shipping addresses will incur multiple delivery<br />
    costs depending on the location of shipment/delivery.</li>
                                            <li>We reserve the right to choose the most appropriate shipping method according to<br />
    the size and weight of your order, the location of your shipping address, and other<br />
    factors.</li>
                                            <li>Goods to Nairobi will be shipped within 24 working hours after receipt and clearance<br />
    of an order and 48 working hours to the rest of Kenya provided orders are made<br />
    between 8:00 a.m. and 3:00 p.m. Monday to Saturday. Note that the shipping times<br />
    are estimates and not guarantees.</li>
                                            <li><a href="https://abookstore.co.ke" target="_blank">https://abookstore.co.ke</a> &nbsp;is not responsible for receiving and processing an order<br />
    with an incorrect shipping address. Please check your shipping address for<br />
    accuracy.&nbsp;Please allow for additional time for all out of town and international orders.<br />
    We have no control over certain delays like incorrect delivery addresses, weather,<br />
    courier and customs delays and Post Office delivery restrictions.</li>
                                            <li>Local customs and immigration agencies determine any duties or taxes that may be<br />
    levied against packages arriving from outside the destination country. These<br />
    additional fees are the responsibility of the recipient.</li>
                                            <li><a href="https://abookstore.co.ke" target="_blank">https://abookstore.co.ke</a> cannot be held responsible for any costs incurred by the<br />
    purchaser or recipient of orders due to shipment failure or late delivery.</li>
                                            <li>In exercising its discretion free shipping may be available at times communicated only<br />
    on orders with a shipping address in Kenya, however not an order with multiple<br />
    shipping addresses.</li>
                                            <li>You will receive a confirmation through your mobile phone once delivery has been<br />
    dispatched.</li>
                                        </ol>
                                        <br />
                                        <p>To follow up on orders, you can reach us on 0745203001</p>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
                    <div className="container">
                        <NewsLetterComponent />
                    </div>

                </section>


            </main>
            <FooterComponent />
        </div>
    </>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        favorite: state.favorite
    }
}

export default connect(mapStateToProps, null)(DeliveryDetails);
