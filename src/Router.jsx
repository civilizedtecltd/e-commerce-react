import React from 'react';
import { Route, Switch , Redirect, useLocation} from 'react-router-dom';

// User Area
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout'
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import ChangePassword from './pages/auth/changePassword';
import VerifyCode from './pages/auth/VerifyCode';

// Logged User Profile
import UserProfile from './pages/users/UserProfile';
import Subscription from './pages/users/Subscription';
import OrderPage from './pages/users/OrderPage';
import PaymentPage from './pages/users/PaymentPage';

// Theme Page
import Home from './pages/Home';
import OfferPage from './pages/offerPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';
import ShopPage from './pages/ShopPage';
import ProductPage from "./pages/ProductPage";

import PrivateRoute from './components/authComponents/PrivateRoute';
import ErrorPage from './pages/Error404';
import TermConditions from "./pages/terms/TermConditions";
import Privacy from "./pages/terms/Privacy";
import Refunds from "./pages/terms/Refunds";
import DeliveryDetails from "./pages/terms/DeliveryDetails";
import PlaceOrder from "./pages/terms/PlaceOrder";

import store from './redux/store';
import { favoriteNotInState } from './redux/actions/favoriteActions';
import { filterNotInState } from "./redux/actions/filterAction";
import { shopNotInState } from './redux/actions/shopActions';
import { authNotInState } from "./redux/actions/authActions";
import { siteNotInState } from './redux/actions/siteActions';
import isEqual from 'lodash/isEqual';




const Router = () => {

    const localState = JSON.parse(localStorage.getItem('state'));
    const location = useLocation();

    const presentState = store.getState();

    if(localState !== null){
        if(!isEqual(presentState.favorite, localState.favorite)){
            store.dispatch(favoriteNotInState(localState.favorite))
        }

        if(!isEqual(presentState.shop.cart, localState.shop.cart) || !isEqual(presentState.shop.deliveryMethod, localState.shop.deliveryMethod) ){
            store.dispatch(shopNotInState(localState.shop))
        }
        if (!isEqual(presentState.filter.priceFilter, localState.filter.priceFilter)) {
            store.dispatch(filterNotInState(localState.filter));
        }
         if (!isEqual(presentState.auth, localState.auth)) {
            store.dispatch(authNotInState(localState.auth));
        }

        if(!isEqual(presentState.site, localState.site)){
            store.dispatch(siteNotInState(localState.site));
        }

    }

    return(
        <Switch /* location={props.location} */>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/profile-settings" component={UserProfile} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/change-password/:code" component={ChangePassword} />
              <Route path="/verify-code" component={VerifyCode} />
              <PrivateRoute path="/email-subscription" component={Subscription} />
              <PrivateRoute path="/my-order" component={OrderPage} />
              <PrivateRoute path="/payment-methods" component={PaymentPage} />
              <Route path="/book-offer" component={OfferPage} />
              <PrivateRoute path="/cart" component={CartPage} />
              <PrivateRoute path="/checkout" component={CheckoutPage} />
              <Route path="/favorites" component={FavoritesPage} />
              <Route exact path="/shop/category/:id?/:title?" component={ShopPage} />
              <Route exact path="/shop" render={() => <Redirect to={{ pathname: "/shopping", state: { from: location }}}/>} />
              <Route exact path="/shopping" component = {ShopPage} />
              <Route exact path="/shop/category/all/:pageNumber/:showItem/:keyword?" component={ShopPage}/>
              <Route exact path="/shop/filter/category/:id?/:filter_type/:filter_id" component={ShopPage} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/term/conditions" component={TermConditions} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/refunds" component={Refunds} />
              <Route path="/delivery/details" component={DeliveryDetails} />
              <Route path="/place/order" component={PlaceOrder} />
              {/*social link */}
              <Route path='/facebook' component={() => {window.location = 'https://facebook.com'; return null;}}/>
              <Route path='/googlePlus' component={() => {window.location = 'https://google.com'; return null;}}/>
              <Route path='/instagram' component={() => {window.location = 'https://instagram.com'; return null;}}/>
              <Route path='/twitter' component={() => {window.location = 'https://twitter.com'; return null;}}/>
            <Route path='/logout' component={Logout} />
            {/* <Route path="/test-pay" component={Test}/> */}
              <Route path='*'  component={ErrorPage} />
        </Switch>
    )
}


export default Router;
