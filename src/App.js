import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Forgotpass from './pages/auth/Forgotpass';
import Changepass from './pages/auth/Changepass';
import VerifyCode from './pages/auth/VerifyCode';
import UserProfile from './pages/users/UserProfile';
import Subscription from './pages/users/Subscription';
import OrderPage from './pages/users/OrderPage';
import PaymentPage from './pages/users/PaymentPage';

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
     </Switch>
   </Router>
  );
}

export default App;
