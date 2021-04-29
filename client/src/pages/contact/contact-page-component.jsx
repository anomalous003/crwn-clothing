import React from 'react'
import './contact-page.styles.scss'
import AboutUs from '../../components/about-us/about-us-component'
import Address from '../../components/address/address-component'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <h3 className="contact-heading">
        Don't be shy, reach out to us
      </h3>
      <AboutUs />
      <Address/>
    </div>
  )
}

export default ContactPage
