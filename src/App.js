import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
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
import ProductPage from "./pages/ProductPage";

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/login">
          <Login/>
       </Route>
       <Route path="/signup">
          <Signup/>
       </Route>
       <Route path="/forgotpass">
          <Forgotpass />
       </Route>
       <Route path="/changepass">
          <Changepass />
       </Route>
       <Route path="/verify-code">
        <VerifyCode />
       </Route>
       <Route path="/profile-settings">
        <UserProfile />
       </Route>
       <Route path="/email-subscription">
         <Subscription />
       </Route>
       <Route path="/order">
        <OrderPage />
       </Route>
       <Route path="/payment-methods">
        <PaymentPage />
       </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/offer">
        <OfferPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>

     </Switch>
   </Router>
  );
}

export default App;
