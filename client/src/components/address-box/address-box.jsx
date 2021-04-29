import React from 'react'
import './address-box.styles.scss'

const AddressBox = () => {
  return (
    <div className="media-box">
      <div className="media-block">
        <div className="media-icon"><i className="fas fa-map-marker-alt"></i></div>
        <div className="media-info">
          <span className="info-sub">Visit Us</span>
          <span className="info-main">7329 Ashok Nagar, Pune, India</span>
        </div>
      </div>

      <div className="media-block">
        <div className="media-icon"><i className="fas fa-mobile-alt"></i></div>
        <div className="media-info">
          <span className="info-sub">Text Us</span>
          <span className="info-main">+91 9021779744</span>
        </div>
      </div>

      <div className="media-block">
        <div className="media-icon"><i className="fas fa-envelope"></i></div>
        <div className="media-info">
          <span className="info-sub">Email Us</span>
          <span className="info-main">adityamusale004@gmail.com</span>
        </div>
      </div>

      <div className="social-media-block">

        <div className="media-info">
          <span className="info-social">Follow us</span>
          <div className="social-media">
            <div className="social-media-icons"> <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> </div>
            <div className="social-media-icons"> <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i></a> </div>
            <div className="social-media-icons"><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default AddressBox
