import React from 'react'
import './SingleCategory.css'
import icon from '../assets/javedicon.png'
import { FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SingleCategory = () => {
  return (
    <div>
      <div className="parentSingleCategory">
        <div className="bannerCategory">
            <div className="iconCategory">
                <img src={icon} alt="" classname="iconbanner" width="100" height="100"/>
            </div>
            <div className="detailsCategory">
                <div className="headingCategory">
                    <h2>Javed Habib Hair & Beauty</h2>
                </div>
                <div className="addressCategory">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate praesentium reprehenderit cumque expedita soluta?</p>
                </div>
                <div className="contactCategory">
                    <p><FaPhone/>  +91 123454321</p>
                </div>
                <div className="viewprofileCategory">
                    <Link to='/SingleBusinessPage'>
                    <button> 
                        View Profile
                    </button>
                    </Link>
                </div>

            </div>
            <div className="bookbuttonCategory">
                <button>BOOK NOW</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCategory
