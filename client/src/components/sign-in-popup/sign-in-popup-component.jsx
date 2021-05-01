import './sign-in-popup.styles.scss'

import { Link } from 'react-router-dom'

import React from 'react'
import ReactDom from 'react-dom'

const SignInPopup = ({ children, showPopup, closePopup }) => { 
  return ReactDom.createPortal(
    showPopup ?
      <>
      <div className="overlays"/>
  
      <div className='popup-container'>
        <div className="popup-message">
          {children}
        </div>
  
        <div className="popup-buttons">
            <div className="cancel" onClick={closePopup}> Cancel </div>
  
          <Link to='/sign-in' className="signIn-popup"> Sign In </Link>
        </div>
      </div>
    </> : null,
    document.getElementById('portal')
  )
}

export default SignInPopup