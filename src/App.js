import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// User Area
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Forgotpass from './pages/auth/Forgotpass';
import Changepass from './pages/auth/Changepass';
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
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotpass" component={Forgotpass} />
        <Route path="/changepass" component={Changepass} />
        <Route path="/verify-code" component={VerifyCode} />
        <Route path="/profile-settings" component={UserProfile} />
        <Route path="/email-subscription" component={Subscription} />
        <Route path="/order" component={OrderPage} />
        <Route path="/payment-methods" component={PaymentPage} />
        <Route path="/home" component={Home} />
        <Route path="/offer" component={OfferPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
