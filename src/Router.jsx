import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// Theme Page
import Home from "./pages/Home";

import PrivateRoute from "./components/authComponents/PrivateRoute";

import store from "./redux/store";
import { favoriteNotInState } from "./redux/actions/favoriteActions";
import { filterNotInState } from "./redux/actions/filterAction";
import { shopNotInState } from "./redux/actions/shopActions";
import { authNotInState } from "./redux/actions/authActions";
import { siteNotInState } from "./redux/actions/siteActions";
import isEqual from "lodash/isEqual";
import TopProducts from "./pages/TopProducts";
//import offerPage from './pages/offerPage';

const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));

// Logged User Profile
const UserProfile = lazy(() => import("./pages/users/UserProfile"));
const Subscription = lazy(() => import("./pages/users/Subscription"));
const OrderPage = lazy(() => import("./pages/users/OrderPage"));
const PaymentPage = lazy(() => import("./pages/users/PaymentPage"));

// User Area
const Login = lazy(() => import("./pages/auth/Login"));
const Logout = lazy(() => import("./pages/auth/Logout"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ChangePassword = lazy(() => import("./pages/auth/changePassword"));
const VerifyCode = lazy(() => import("./pages/auth/VerifyCode"));

const ErrorPage = lazy(() => import("./pages/Error404"));
const TermConditions = lazy(() => import("./pages/terms/TermConditions"));
const Privacy = lazy(() => import("./pages/terms/Privacy"));
const Refunds = lazy(() => import("./pages/terms/Refunds"));
const DeliveryDetails = lazy(() => import("./pages/terms/DeliveryDetails"));
const PlaceOrder = lazy(() => import("./pages/terms/PlaceOrder"));

const OfferPage = lazy(() => import("./pages/offerPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ProductPage = lazy(() => import("./pages/Product/ProductPage"));

const Router = () => {
    const localState = JSON.parse(localStorage.getItem("state"));
    const location = useLocation();

    const presentState = store.getState();

    if (localState !== null) {
        if (!isEqual(presentState.favorite, localState.favorite)) {
            store.dispatch(favoriteNotInState(localState.favorite));
        }

        if (
            !isEqual(presentState.shop.cart, localState.shop.cart) ||
            !isEqual(
                presentState.shop.deliveryMethod,
                localState.shop.deliveryMethod
            )
        ) {
            store.dispatch(shopNotInState(localState.shop));
        }
        if (
            !isEqual(
                presentState.filter.priceFilter,
                localState.filter.priceFilter
            )
        ) {
            store.dispatch(filterNotInState(localState.filter));
        }
        if (!isEqual(presentState.auth, localState.auth)) {
            store.dispatch(authNotInState(localState.auth));
        }

        if (!isEqual(presentState.site, localState.site)) {
            store.dispatch(siteNotInState(localState.site));
        }
    }

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch /* location={props.location} */>
                <Route exact path="/" component={Home} />
                <Route
                    path="/login"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <Login {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/signup"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <SignUp {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/swype_success/:ref?"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <PaymentSuccess {...props} />
                        </Suspense>
                    )}
                />
                <PrivateRoute
                    path="/profile-settings"
                    component={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <UserProfile {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/forgot-password"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ForgotPassword {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/change-password/:code"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ChangePassword {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/verify-code"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <VerifyCode {...props} />
                        </Suspense>
                    )}
                />
                <PrivateRoute
                    path="/email-subscription"
                    component={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <Subscription {...props} />
                        </Suspense>
                    )}
                />
                <PrivateRoute
                    path="/my-order"
                    component={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <OrderPage {...props} />
                        </Suspense>
                    )}
                />
                <PrivateRoute
                    path="/payment-methods"
                    component={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <PaymentPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/book-offer"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <OfferPage {...props} />
                        </Suspense>
                    )}
                />
                <PrivateRoute
                    path="/cart"
                    component={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <CartPage {...props} />
                        </Suspense>
                    )}
                />
                <PrivateRoute
                    path="/checkout"
                    component={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <CheckoutPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/favorites"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <FavoritesPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    exact
                    path="/shop/category/:id?/:title?"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ShopPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    exact
                    path="/shop"
                    render={() => (
                        <Redirect
                            to={{
                                pathname: "/shopping",
                                state: { from: location },
                            }}
                        />
                    )}
                />
                <Route
                    exact
                    path="/shopping"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ShopPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    exact
                    path="/shop/category/all/:pageNumber/:showItem/:keyword?"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ShopPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    exact
                    path="/shop/filter/category/:id?/:filter_type/:filter_id"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ShopPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    exact
                    path="/top-products/:slug"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <TopProducts {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/product/:id"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <ProductPage {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/term/conditions"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <TermConditions {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/privacy"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <Privacy {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/refunds"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <Refunds {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/delivery/details"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <DeliveryDetails {...props} />
                        </Suspense>
                    )}
                />
                <Route
                    path="/place/order"
                    render={(props) => (
                        <Suspense fallback={<h1>Loading</h1>}>
                            <PlaceOrder {...props} />
                        </Suspense>
                    )}
                />
                {/*social link */}
                <Route
                    path="/facebook"
                    component={() => {
                        window.location = "https://facebook.com";
                        return null;
                    }}
                />
                <Route
                    path="/googlePlus"
                    component={() => {
                        window.location = "https://google.com";
                        return null;
                    }}
                />
                <Route
                    path="/instagram"
                    component={() => {
                        window.location = "https://instagram.com";
                        return null;
                    }}
                />
                <Route
                    path="/twitter"
                    component={() => {
                        window.location = "https://twitter.com";
                        return null;
                    }}
                />
                <Route path="/logout" component={Logout} />
                {/* <Route path="/test-pay" component={Test}/> */}
                <Route path="*" component={ErrorPage} />
            </Switch>
        </Suspense>
    );
};

export default Router;
