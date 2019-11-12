import React from 'react'
import { spring, AnimatedSwitch } from "react-router-transition";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
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
import './animation.css'
import ErrorPage from './pages/Error404';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0.5),
    scale: bounce(0.5),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    <Router>
      <AnimatedSwitch
       atEnter={bounceTransition.atEnter}
       atLeave={bounceTransition.atLeave}
       atActive={bounceTransition.atActive}
       mapStyles={mapStyles}
       className="route-wrapper"
    >

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/changePassword" component={ChangePassword} />
        <Route path="/verify-code" component={VerifyCode} />
        <Route path="/profile-settings" component={UserProfile} />
        <Route path="/email-subscription" component={Subscription} />
        <Route path="/order" component={OrderPage} />
        <Route path="/payment-methods" component={PaymentPage} />
        
        <Route path="/offer" component={OfferPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product" component={ProductPage} />
        <Route path='*'  component={ErrorPage} />

      </AnimatedSwitch>
     </Router>
  );
}


export default App;
