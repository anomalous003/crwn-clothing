import React from 'react'

import Spinner from '../spinner/spinner'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => isLoading ? <Spinner/> : <WrappedComponent {...otherProps}/>
    

export default WithSpinner