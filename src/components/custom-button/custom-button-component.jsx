import './custom-button.styles.scss'

import React from 'react'

const CustomButton = ({ children, className, ...otherProps}) => {
    return (
        <button
            className={`${className} custom-button`}
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
