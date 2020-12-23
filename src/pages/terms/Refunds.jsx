import React from "react";
import HeaderComponent from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import { NewsLetterComponent } from "../../components/offerPageComponents/NewsLetterComponent";
import TermConditionsComponent from '../../components/terms/TermConditionsComponent'
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { connect } from "react-redux";
import PageLoader from "../../components/pageLoader/PageLoaderComponent";

const Refunds = (props) => {

    const totalItem = props.cart.length;
    const favoriteItem = props.favorite.items;

    return (
        <>
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
                                        <h2>Refunds</h2>
                                        <div className="helpPara mt-3">
                                            <p>Refunds are <b><u>not acceptable</u></b> save for in the event that:-<br />
                                                <div style={{ marginLeft: 20 }}>1. You are eligible for a full refund of the purchase price, including original shipping<br />costs, only if your return is a result of an error on our part; where we have shipped<br />the incorrect product, or a product that is damaged, or one that does not conform to<br />the description offered on our website. To receive a refund, you must return your<br />ordered item directly to us within 7 days of the estimated delivery date and in the<br />same condition you received it in.</div>
                                            </p>
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


const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        favorite: state.favorite
    }
}


export default connect(mapStateToProps, null)(Refunds);
