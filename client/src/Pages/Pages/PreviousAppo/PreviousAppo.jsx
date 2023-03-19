import React, { useState } from 'react';
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import Navbar from '../../Components/Navbar/Navbar'
import CustomizedTable from '../../Components/CustomizedTable/CustomizedTable'
import Calendar from 'react-calendar';
import './PreviousAppo.css'
import 'react-calendar/dist/Calendar.css';

const PreviousAppo = () => {

    const [value, onChange] = useState(new Date());

  return (
    <div className='PreviousAppo'>
      
        <VerticalNavbar />  
        <Navbar />

        <div className="ProffName">
          <h1>Good Evening, Parth</h1>
          <p>Have a nice day at work</p>

          <img src="https://img.freepik.com/free-vector/appointment-booking-calendar-design_23-2148573174.jpg?w=2000" alt="" />
        </div>

        <div className="ReqContainer">
          <h1>Booked Appointment</h1>
          <div className="ReqApp">
              <CustomizedTable />
          </div>
        </div>
         
    </div>
  )
}

export default PreviousAppo