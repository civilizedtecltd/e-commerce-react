import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../constants/config'
import { setAuthToken } from '../helpers/setAuthToken'
import LoaderSm from './LoaderSm'
import { connect } from 'react-redux'
import { setRedirectToOrder } from '../redux/actions/siteActions'

function PaymentSuccess(props) {
  const [msg, setMsg] = useState(null)
  let { ref } = useParams()
  if (ref === undefined) {
    ref = ""
  }
  const order_ref_decode = atob(ref)

  useEffect(() => {
    setAuthToken();
    const order_ref = atob(atob(localStorage.getItem('or') || ''))
    const user_mail = JSON.parse(localStorage.getItem('usr_mail'))

    if (order_ref_decode === order_ref) {

      axios.post(URL._SET_PAY_SUCCESS, { order_ref, user_mail })
        .then(res => {
          if (res?.data?.success) {
            setMsg(1)
            localStorage.removeItem('or')
            localStorage.removeItem('usr_mail')
            setTimeout(() => {
             window.top.location.href = `${window.location.origin}/my-order`
            }, 3000);
          } else {
            localStorage.removeItem('or')
            localStorage.removeItem('usr_mail')
            setMsg(2)
            setTimeout(() => {
              window.top.location.href = `${window.location.origin}/my-order`
            }, 3000);
          }
        })

    }
  }, [])

  return (
    <div>
      <Row>
        <Col>
          {msg === 1 &&
            <h2 className="mt-4 text-center">Payment Success, Redirecting to <a href="/my-oder">Your Order</a></h2>
          }
          {msg === 2 &&
            <h2 className="mt-4 text-center text-danger">Error Occured, Please Contact with us about your payment issue</h2>
          }
          {!msg && <>
            <h2 className="text-center">Please Wait... </h2>
            <div className="d-flex align-items-center justify-content-center">
              <LoaderSm size="100" clr="#3897cf" />
            </div>
          </>
          }
        </Col>
      </Row>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  setRedirectToOrder: (status) => dispatch(setRedirectToOrder(status)),
})
export default connect(null, mapDispatchToProps)(PaymentSuccess)
