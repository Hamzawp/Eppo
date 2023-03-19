import React from 'react'
import { useState } from 'react';
import './BookAppPopUp.css'
const BookAppPopUp = (props) => {

    const [inpVal, setinpVal] = useState({
    writeDate: "",
    writeTime: "",
    writeRequest: "",
  });
  const [data, setData] = useState([]);
  const addData = (e) =>{
    e.preventDefault();
    const {writeDate, writeTime, writeRequest} = inpVal;
    if(writeDate === "" || writeTime === "" || writeRequest === ""){
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


  return (props.trigger)? (
    <div>
      <div className="parentpopupbook">
        <div className="headingbookapp">
            <h1>BOOK YOUR APPOINTMENT</h1>
            <button onClick={() => props.setTrigger(false)}>X</button>
        </div>
        <div className="bookAppform">
            <p>Date:</p>
            <input type="date" name="writeDate" onChange={getData} />
            <p>Time:</p>
            <input type="time" name="writeTime" onChange={getData}/>
            <p className="req">Your Requests:</p>
            <textarea id="" cols="30" rows="10" name="writeRequest" onChange={getData}></textarea>
            <button className="submitbookapp" onClick={addData}>SUBMIT</button>
        </div>
      </div>
    </div>
  ): ""
}

export default BookAppPopUp
