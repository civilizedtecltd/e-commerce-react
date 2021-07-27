import React from "react";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import {NewsLetterComponent} from "../../components/offerPageComponents/NewsLetterComponent";
import TermConditionsComponent from '../../components/terms/TermConditionsComponent'
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { connect } from "react-redux";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const PlaceOrder = (props) => {

    const totalItem = props.cart.length;
    const favoriteItem = props.favorite.items;

    return (<>
            <PageLoader loading={false}/>
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
                                        <h2>How to place an order</h2>
                                        <div className="helpPara mt-3">
                                            <ul className="helptmlist">
                                                <li>
                                                    Go to the home page and browse at your leisure.
                                                </li>
                                                <li>
                                                    Choose an item you want to buy, choose the quantity, and press the button <b>“ADD TO CART”</b>.
                                                </li>
                                                <li>
                                                    Then you can choose another item and go to ordering.
                                                </li>
                                                <li>
                                                    To place an order access your cart.
                                                </li>
                                                <li>
                                                    Fill in your personal data (name, surname, phone number and shipping address)
                                                </li>
                                                <li>
                                                    On the bases of your address the shop will offer you available shipping details. You should choose the one suitable for you.
                                                </li>
                                                <li>
                                                    Then you will be headed to the page where you can choose the payment method.
                                                </li>
                                                <li>
                                                    You can choose to pay using Mpesa or Credit Card.
                                                </li>
                                                <li>
                                                    To finish your purchase you must accept the shop rules. And push the button “Pay”.
                                                </li>
                                                <li>
                                                    You will get a confirmation letter to your mail with its detailed description.
                                                </li>
                                                <li>
                                                    We will deliver your products directly to your door.
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>


                    <section className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap" id="mailSubscribe">
                        <div className="container">
                            <NewsLetterComponent/>
                        </div>

                    </section>


                </main>
                <FooterComponent/>
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
export default connect(mapStateToProps, null)(PlaceOrder);
