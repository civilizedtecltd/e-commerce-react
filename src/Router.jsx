import React from 'react';
import { Route, Switch } from 'react-router-dom';


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

    <Switch key={0} location={props.location}>
              <Route key={1} exact path="/" component={Home} />
              <Route key={2} path="/login" component={Login} />
              <Route key={3} path="/signup" component={SignUp} />
              <PrivateRoute key={4} path="/profile-settings" component={UserProfile} />
              <Route key={5} path="/forgot-password" component={ForgotPassword} />
              <Route key={6} path="/change-password" component={ChangePassword} />
              <Route key={7} path="/verify-code" component={VerifyCode} />
              <Route key={8} path="/email-subscription" component={Subscription} />
              <Route key={9} path="/my-order" component={OrderPage} />
              <Route key={10} path="/payment-methods" component={PaymentPage} />
              <Route key={11} path="/book-offer" component={OfferPage} />
              <Route key={12} path="/cart" component={CartPage} />
              <Route key={13} path="/checkout" component={CheckoutPage} />
              <Route key={14} path="/favorites" component={FavoritesPage} />
              <Route key={15} path="/shop/category/:id?/:title?" component={ShopPage} />
              <Route key={16} path="/product/:id" component={ProductPage} />
              <Route key={17} path='*'  component={ErrorPage} />
    </Switch>
)

export default Router;
