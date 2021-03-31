import './custom-button.styles.scss'

import React from 'react'

const CustomButton = ({ children, className, ...otherProps }) => {
    return (
        <button
            className={`custom-button
            ${className}`}
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
