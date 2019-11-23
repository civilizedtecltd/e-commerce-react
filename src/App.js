import React from 'react'
<<<<<<< HEAD
import { spring, AnimatedSwitch } from "react-router-transition";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import AuthRoute from './components/authComponents/AuthRoute';

=======
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AuthRoute from './components/authComponents/AuthRoute';
import styled from "styled-components";
>>>>>>> master
// User Area
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
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

import ErrorPage from './pages/Error404';


function App({location}) {

  return (
  <Wrapper>
  <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <section className="route-section">
          <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <AuthRoute path="/profile-settings" component={UserProfile} />
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
        </section>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);
}

const Wrapper = styled.div`
.fade-enter {
opacity: 0.01;
}

.fade-enter.fade-enter-active {
opacity: 1;
transition: opacity 300ms ease-in;
}

<<<<<<< HEAD
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/profile-settings" component={UserProfile} /> */}
        <AuthRoute path="/profile-settings" component={UserProfile} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/verify-code" component={VerifyCode} />
        <Route path="/email-subscription" component={Subscription} />
        <Route path="/my-order" component={OrderPage} />
        <Route path="/payment-methods" component={PaymentPage} />
=======
.fade-exit {
opacity: 1;
}
>>>>>>> master

.fade-exit.fade-exit-active {
opacity: 0.01;
transition: opacity 300ms ease-in;
}

div.transition-group {
position: relative;
}

section.route-section {
position: absolute;
width: 100%;
top: 0;
left: 0;
}
`;

export default (withRouter)(App);
