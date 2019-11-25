import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


// User Area
import Login from './pages/auth/Login';
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


const Router = (props) => (

    <Switch location={props.location}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/profile-settings" component={UserProfile} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/verify-code" component={VerifyCode} />
              <Route path="/profile-settings" component={UserProfile} />
              <Route path="/email-subscription" component={Subscription} />
              <Route path="/my-order" component={OrderPage} />
              <Route path="/payment-methods" component={PaymentPage} />
              <Route path="/book-offer" component={OfferPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/favorites" component={FavoritesPage} />
              <Route path="/shop/category/:id?/:title?" component={ShopPage} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path='*'  component={ErrorPage} />
    </Switch>
)

export default Router;
