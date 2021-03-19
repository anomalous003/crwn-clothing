import './custom-button.styles.scss'

import React from 'react'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
