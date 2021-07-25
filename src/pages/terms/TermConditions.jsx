import React from "react";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import { NewsLetterComponent } from "../../components/offerPageComponents/NewsLetterComponent";
import TermConditionsComponent from '../../components/terms/TermConditionsComponent'
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { connect } from "react-redux";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const TermConditions = (props) => {

    const totalItem = props.cart.length;
    const favoriteItem = props.favorite.items;

    return (<>
        <PageLoader loading={false} />
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
                                    <h2>Terms and conditions</h2>
                                    <div className="helpPara mt-3">
                                        <ul className="helptmlist">
                                            <li>
                                                Returned items should be in the same condition as they were at the time of shipment.<br />
                                            </li>
                                            <li>
                                               We have a no refund policy however as our customer you are at liberty to choose any other item of similar cost from our website.<br/>
                                            </li>
                                            <li>
                                                Delivery charges are only refundable where goods are faulty and a refund is made.<br />
                                            </li>
                                            <li>
                                                The cost of returning the item to us is your responsibility.<br />
                                            </li>
                                            <li>
                                                There are no refunds on items damaged in delivery. In that case, you must file a claim with the carrier.<br />
                                            </li>
                                            <li>
                                                In case of a refund, either partial or full, the transaction fees incurred by <a href="https://abookstore.co.ke" target="_blank">https://abookstore.co.ke</a> will be deducted from the refund amount<br />
                                            </li>
                                            <li>
                                                Facilitate delivery. Failure to which, <a href="https://abookstore.co.ke" target="_blank">https://abookstore.co.ke</a> will deliver the item to the nearest or most convenient town/county.
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
export default connect(mapStateToProps, null)(TermConditions);
