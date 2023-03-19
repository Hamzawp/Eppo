import * as React from 'react';
import {useState} from 'react';
import './BusinessProfile.css';
import tagbackground from '../assets/javedtagbg.png';
import tagicon from '../assets/tag.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import ReviewDisplay from './ReviewDisplay';
import WriteReview from './WriteReview';
import { FaAddressBook, FaAddressCard, FaLocationArrow, FaMap, FaSearchLocation } from 'react-icons/fa';
import BookAppPopUp from '../BookAppPopUp/BookAppPopUp';
const BusinessProfile = () => {
    const [value, setValue] = React.useState(4);
    const [buttonPopUp, setButtonPopup] = useState(false);
  return (
    <div>
      <div className="parentBusinessProfile">
        <div className="leftBusinessProfile">
            <div className="mainprofileBusinessProfile">
                <div className="detailsBusinessProfile">
                    <div className="tagimg">
                        <img src={tagbackground} className="tagbg" alt="" />
                    </div>
                    <div className="detialbody">
                    <div className="leftdetails">
                            <div className="maindetails">
                                <h1>Javed Habib Hair & Beauty</h1>
                                <p>Javed Habib is ready for your upgrade</p>
                            </div>
                            <div className="addressBusinessProfile">
                                <p> <FaMap></FaMap> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eligendi!</p>
                            </div>
                            <div className="contactinfoBusinessProfile">
                                <button className='contactbutton'>
                                    <span>Contact Info</span>
                                </button>
                            </div>
                        </div>
                        <div className="rightdetails">
                            <div className="ratingBusinessProfile">
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >
                                {/* <Typography component="legend">Read only</Typography> */}
                                <Rating name="read-only" value={value} readOnly />
                                </Box>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className="iconmainprofile">
                <img src={tagicon} className="tagicon" alt="" />
            </div>
            </div>
            
            <div className="bookBusinessProfile">
                <a><div className="bookheadingBusinessProfile">
                    
                        <button className="plusbutton" onClick={()=> setButtonPopup(true)}> + </button>
                        <h2 >Book you appointment now</h2>
                        <BookAppPopUp trigger={buttonPopUp} setTrigger={setButtonPopup}>
                            
                        </BookAppPopUp>
                </div></a>
            </div>
        </div>
        <div className="rightBusinessProfile">
            <div className="reviewsBusinessProfile">
                    <ReviewDisplay/>
                    <ReviewDisplay/>
                    <ReviewDisplay/>
            </div>
            <div className="writereviewBusinessProfile">
                    <WriteReview/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProfile
