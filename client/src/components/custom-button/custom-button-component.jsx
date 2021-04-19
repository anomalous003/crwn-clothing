import React from 'react'

import { CustomButtonContainer } from './custom-button.styled-components'

const CustomButton = ({ children, className, ...otherProps }) => {
    return (
        <CustomButtonContainer {...otherProps}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton
