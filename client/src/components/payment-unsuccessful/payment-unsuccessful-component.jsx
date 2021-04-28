import React from 'react'
import './payment-unsuccessful.styles.scss'

import { connect } from 'react-redux'
import { paymentUnsuccessful } from '../../redux/checkout/checkout.actions'

const PaymentSuccessful = ({ onPaymentUnsuccessful }) => {
  return (
    <>
      <div className="overlays"/>
      <div className="failure-container">
        <div className="icon-box">
          <i class="fas fa-exclamation-circle"></i>
          <span className='main-message'>Your Payment was Unsuccessful!!</span>
        </div>
        <div className="sub-message">
          Please check your Card details
              </div>
        <div className="buttons">
          <div
            className="retry"
            onClick={() => onPaymentUnsuccessful(null)}
          >Retry</div>
        </div>
      </div>
    </>  
  )
}

const mapDispatchToProps = dispatch => ({
  onPaymentUnsuccessful: status => dispatch(paymentUnsuccessful(status))
})

export default connect(null, mapDispatchToProps)(PaymentSuccessful)