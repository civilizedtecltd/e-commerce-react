import React,{useState} from 'react'
import paypal from 'paypal-checkout';
import visa from './paypal.png';
import './paymentbar.css'

function PaypalCheckoutButton() {
    
    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.value == 'paypal') {
            
        }
    }
    const paypalConf = {
        currency: "USD",
        env: "sandbox",
        client: {
            sandbox: 'AealZEZeqmY7Losu4ottC6QaYcqXdXNODFgEsyhM-p4sVbUhNESDO2fivVthS7vbnR7lrt2FrIhKGynm',
            production: '@AcmOk1IjB5Rwg-UR8hXaNoA_V5vUygu3J1ZZ3aAZ1dasN51hwonSMchFqSyyD5V_OaPUPcIXFIPIkpDy'
        },
        locale:'en_US',
        style: {
            lebel: 'pay',
            size: 'small',
            color: 'gold',
            shape: 'pill', 
        },
        commit: true,
    /* payment method start */
        payment:(data,actions)=> {
            return actions.payment.create({
                transactions: [{
                    amount: {
                        total: '0.01',
                        currency: 'USD'
                    }
                }]
            });
        },
    /* payment method end */
        onAuthorize: (data,actions) => {
            return actions.payment.execute().then(() => {
               alert("Thank you for your purchase!") 
            })
        }
    }

    return (
        <div className="text-right">
            <div class="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">

                <label class="btn paymentMethod active">
                    <div class="method visa"></div>
                    <input type="radio" name="options" checked/> 
                </label>
                
                <label class="btn paymentMethod">
                    <div class="method master-card"></div>
                    <input type="radio" name="options"/>
                </label>
                
                <label class="btn paymentMethod">
                    <div class="method amex"></div>
                    <input type="radio" name="options"/>
                </label>
                
                <label class="btn paymentMethod">
                    <div class="method vishwa"></div>
                    <input type="radio" name="options"/> 
                </label>
                
                <label class="btn paymentMethod">
                <div class="method ez-cash"></div>
                   <input type="radio" name="options"/>
                </label>

                </div>     
        </div>
    )
}

export default PaypalCheckoutButton;