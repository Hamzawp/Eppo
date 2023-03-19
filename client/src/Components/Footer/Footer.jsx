import React from 'react'
import './Footer.css'
import appSTore from '../../Components/Footer/pay/app.jpg'
import playSTore from '../../Components/Footer/pay/play.jpg'
import pay from '../../Components/Footer/pay/pay.png'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <footer className="section-p1">
        <div className="col">
            {/* <img src="img/logo.png" alt="" height="75" width="150" className="logo" /> */}
            <h1>EPPO</h1>
            <h4>Contact</h4>
            <p><strong>Address: </strong> 502, Lorem ipsum dolor sit amet</p>
            <p><strong>Phone: </strong> +91 1234567890 / +91 9874563210 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
        
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i><FaInstagram /></i>
                    <i><FaFacebook /></i>
                    <i><FaTwitter /></i>
                    <i><FaYoutube /></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="/">About us</a>
            <a href="/">Delivery Information</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Condition</a>
            <a href="/">Contact us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="/">Sign In</a>
            <a href="/">My Wishlist</a>
            <a href="/">Track my order</a>
            <a href="/">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={appSTore} alt="" />
                <img src={playSTore} alt="" /> 
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />
        </div>
    </footer>
    </>
  )
}

export default Footer