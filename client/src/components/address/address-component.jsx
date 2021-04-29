import React from 'react'
import GoogleMap from '../map/map-component'
import AddressBox from '../address-box/address-box'

import './address.styles.scss'

const Address = () => {
  return (
    <div className='address-container'>
      <div className="head-box">
        <div className="tagline">come and visit us</div>
        <div className="timing">monday - sunday, 11:00am to 9:30pm (ist)</div>
      </div>
      <div className="address-box">
        <AddressBox/>
        <GoogleMap />
      </div>
      
    </div>
  )
}

export default Address