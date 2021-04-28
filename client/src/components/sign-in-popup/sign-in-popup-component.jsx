import './sign-in-popup.styles.scss'

import { Link } from 'react-router-dom'

import React from 'react'

const SignInPopup = () => {
  return (
    <>
      <div className="overlays"/>
  
      <div className='popup-container'>
        <div className="popup-message">
          Please Sign In before you proceed
        </div>
  
        <div className="popup-buttons">
          <Link to='/' className="cancel"> Cancel </Link>
  
          <Link to='/sign-in' className="signIn-popup"> Sign In </Link>
        </div>
      </div>
    </>  
  )
}

export default SignInPopup