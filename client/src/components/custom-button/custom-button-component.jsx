import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, className, ...otherProps }) => {
    return (
        <button {...otherProps} className={`custom-button ${className}`}>
            {children}
        </button>
    )
}

export default CustomButton
