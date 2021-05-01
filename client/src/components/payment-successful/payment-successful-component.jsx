import React from 'react'
import './payment-successful.styles.scss'

const PaymentSuccessful = () => {
    return (
        <>
            <div className="overlays"/>
            <div className="success-container">
                <div className="icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div className="message">Congrats, Your Payment was Successful!!</div>
            </div>
        </>
    )
}


export default PaymentSuccessful