import React from 'react'
import './LandingPage.css'
import { FaSpa, FaStar, FaLungs, FaMedal, FaHandScissors, FaShoppingBag, FaShoppingCart, FaClinicMedical } from 'react-icons/fa'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
        <section className="NavBarContainer">
            <div className="InnerNavCont">
                <div className="LogoHead">
                    <img src="https://t4.ftcdn.net/jpg/05/54/17/79/360_F_554177966_xX2acthwHjhZ9c8dTeLZZ7DhLjJJ0IRK.jpg" alt="" />
                    <h1>EPPO</h1>
                </div>

                <div className="NavItems">
                    <ul>
                        <Link to='/HomePage' style={{ textDecoration: "none" }}><li>Home</li></Link>
                        <Link to='/HomePage' style={{ textDecoration: "none" }}><li>About Us</li></Link>
                        <Link to='/HomePage' style={{ textDecoration: "none" }}><li>Contact Us</li></Link>
                    </ul>
                </div>

                <div className="LoginReg">
                    <Link to='/Login'><button>Login</button></Link>
                    <Link to='/Login'><button>Register</button></Link>
                </div>
            </div>

        </section>

        <section className="heroSection">
            <div className="LeftHero">
                <h1>Discover the easiest way to schedule appointments with the #1 online booking system</h1>
                <p>Save time spent on coordinating appointments over phone and email with an all-in-one appointment booking software. Accept online bookings 24x7, automate payments, business management, marketing, and more!</p>
                <button>Get Started</button>
            </div>
            <div className="RightHero">
                <img src="https://static.vecteezy.com/system/resources/previews/010/941/757/original/business-meeting-appointment-vector.jpg" alt="" />
            </div>
        </section>

        <section className="CategoryList">
            <h1>EPPO can serve almost any industry segment</h1>
            <p>Our appointment booking system is fit for all service-based local businesses, multi-location enterprises, franchises, and more.</p>

            <div className="categoryGrid">
                <div className="categoryBx">
                    <i><FaSpa /></i>
                    <p>Salon & Beauty</p>
                </div>
                <div className="categoryBx">
                    <i><FaHandScissors /></i>
                    <p>Barber</p>
                </div>
                <div className="categoryBx">
                    <i><FaSpa /></i>
                    <p>Spa</p>
                </div>
                <div className="categoryBx">
                    <i><FaLungs /></i>
                    <p>Health & Wellness</p>
                </div>

                <div className="categoryBx">
                    <i><FaMedal /></i>
                    <p>Fitness & Sports</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Proffesionl Services</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Tutoring Services</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Education & Non-profits</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Banking & Finance</p>
                </div>
                <div className="categoryBx">
                    <i><FaShoppingCart /></i>
                    <p>Retail</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Real Estate</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Communities & Facilities</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Government & Public Sector</p>
                </div>
                <div className="categoryBx">
                    <i><FaClinicMedical /></i>
                    <p>Medical Office</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Banking & Finance</p>
                </div>
                <div className="categoryBx">
                    <i><FaShoppingCart /></i>
                    <p>Retail</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Real Estate</p>
                </div>
                <div className="categoryBx">
                    <i><FaStar /></i>
                    <p>Communities & Facilities</p>
                </div>
            </div>
        </section>

        <section className="BannerSection">
            <h1>Advanced booking features to help you put your business<br /> on autopilot</h1>
            <p>With Appointy’s online booking software say goodbye to your pen-paper appointment book, save time,<br/>reduce no shows, and increase staff productivity</p>
            <img src="https://www.appointy.com/online-booking-software/wp-content/uploads/2020/10/website-mockup-laptop-mobile-tab.png" alt="" />
        </section>

        <Footer />
    </>
  )
}

export default LandingPage