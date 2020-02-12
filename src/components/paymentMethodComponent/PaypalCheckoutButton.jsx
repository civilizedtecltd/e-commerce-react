import React,{ useState, useRef, useEffect } from 'react';
import {Button} from 'react-bootstrap'
import paypal from 'paypal-checkout';
import paypal_icon from './paypal.png';
import visa from './visa-2.png';
import amex from './Amex-icon.jpg'
import master_card from './master-card.png'

import './paymentbar.css'
function PaypalCheckoutButton() {

    const [check,setChecked] = useState({
        paypal:false,
        visa:false,
        amex:false,
        master:false,
    })

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
        <div className="text-right" >

            <input type="radio" class="radio_item" value="paypal" name="item" id="radio1" onChange={()=>setChecked({paypal:!check.paypal})} checked={ check.paypal ? true : false }/>
            <label class="label_item" for="radio1"> <img src={paypal_icon}/></label> 
             &nbsp;
             &nbsp;
            <input type="radio" class="radio_item" value="visa" name="item" id="radio2" onChange={()=>setChecked({visa:!check.visa})}  checked={ check.visa ? true : false } />
            <label class="label_item" for="radio2"> <img src={visa} /> </label>
             &nbsp;
             &nbsp;
            <input type="radio" class="radio_item" value="amex" name="item" id="radio3" onChange={()=>setChecked({amex:!check.amex})}  checked={ check.amex ? true : false }/>
            <label class="label_item" for="radio3"><img src={amex} /></label>
             &nbsp;
             &nbsp;
            <input type="radio" class="radio_item" value="master" name="item" id="radio4" onChange={()=>setChecked({master:!check.master})} checked={ check.master ? true : false } />
            <label class="label_item" for="radio4"> <img src={master_card} /></label>
            <div>
                <Button className="mt-5"> Checkout </Button>
            </div>
        </div>
    )
}

export default PaypalCheckoutButton;