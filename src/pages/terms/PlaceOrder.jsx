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
    const totalFavorite = props.favorite.length;

    return (<>
        <PageLoader loading={false}/>
        <div className="allWrapper">
        <HeaderComponent
          favorite_item={totalFavorite}
          cartItem={totalItem}
        />
            <MobileHeader />
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
                                    <h2>Place Order</h2>
                                    <div className="helpPara mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum. Minima
                                            veniam, quis nostrum exercitationem ullam corporis. Ut enim ad minima
                                            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                            ut aliquid.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
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

const mapStateToProps = state => ({
    cart: state.shop.cart,
    favorite: state.favorite
  })
export default connect(mapStateToProps, null)(PlaceOrder);
