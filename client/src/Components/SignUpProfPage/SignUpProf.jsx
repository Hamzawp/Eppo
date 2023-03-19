import React from 'react'
import { useState } from 'react'
import './SignUpProf.css'
// City, Photos (Tag + Icon), Tagline, Address
import signupimg from '../assets/signupimage.png'
import signupbadge from '../assets/signupbadgeimage.png'
const SignUpProf = () => {

    const [inpVal, setinpVal] = useState({
    writeName: "",
    writeCity: "",
    writeContact: "",
    writeBusinessCategory: "",
    writeTagline: "",
    writeCompanyLogo: "",
    writeCompanytg: "",
    writeAddress: "",
  });
  const [data, setData] = useState([]);
  const addData = (e) =>{
    e.preventDefault();
    const {writeName, writeCity, writeContact, writeBusinessCategory, writeTagline, writeCompanyLogo, writeCompanytg, writeAddress} = inpVal;
    if(writeName === "" || writeCity === "" || writeContact === "" || writeBusinessCategory === "" || writeTagline === "" || writeCompanyLogo === "" || writeCompanytg === "" || writeAddress === ""){
      alert("Please fill in details");
    }
    else{
      console.log(...data, inpVal)
    }
    
  }

  const getData = (e) =>{
    const {value, name} = e.target;
    setinpVal(() => {
      return {
        ...inpVal,
        [name] : value
      }
    })
  }
  return (
    <div>
      <div className="parentSignup">
        <div className="leftSignup">
            <div className="headingSignup">
                <h1>REGISTER YOUR COMPANY</h1>
                <p><i>Upscale your business, Help the one in need!</i></p>
            </div>
            <div className="imgs">
                <img src={signupimg} alt="" width="400" height="400" />
                <img src={signupbadge} alt="" width="350" height="350"/>
            </div>
        </div>
        <div className="rightSignup">
            <div className="headingSignup">
                <h1>General Company Information</h1>
            </div>
            <div className="signupform">
                <div className="inputbox">
                    <p>Your Company's Name</p>
                    <input type="text" className="" name="writeName" onChange={getData}/>
                </div>
                <div className="inputbox">
                    <p>Your Company's City</p>
                    <input type="email" className="" name="writeCity" onChange={getData}/>
                </div>
                <div className="inputbox">
                    <p>Your Company's Contact</p>
                    <input type="text" className="" name="writeContact" onChange={getData}/>
                </div>
                <div className="inputbox">
                    <p>Please choose your Business Category</p>
                    <input type="text" className="" name="writeBusinessCategory" onChange={getData}/>
                </div>
                <div className="inputbox">
                    <p>Mention your Company's Tagline</p>
                    <input type="text" className="" name="writeTagline" onChange={getData}/>
                </div>
                <div className="inputbox">
                    <p>Mention your Company's Logo</p>
                    <input type="file" className="" name="writeCompanyLogo" onChange={getData}/>
                </div>
                <div className="inputbox">
                    <p>Your Company profile's Background Image</p>
                    <input type="file" className="" name="writeCompanytg" onChange={getData}/>
                </div>

                <div className="inputbox">
                    <p>Your Company's Address</p>
                    <textarea className="" name="writeAddress" onChange={getData}></textarea>
                </div>
                <div className="submitbuttonsignup">
                    <button className="submitbtnsignup" onClick={addData}>SUBMIT</button>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpProf
