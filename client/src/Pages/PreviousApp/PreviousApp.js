import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar' 
import BasicTable from '../../Components/CustomizedTable/CustomizedTable';
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import past from './past.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PreviousApp.css'



export default function PreviousApp(){
    const [value, onChange] = useState(new Date());
    return(
        <div>
        <Navbar />
        <VerticalNavbar />
        <div  className="container1table pastappt">
        <div className="tablediv">
        <div className="upcomingappts">
        <img src={past} className="upcomingimg" alt="" />
        <p className="tableheading"><span className="upcomingtext">Previous</span> Appointments</p>
        </div>
        <BasicTable />
        </div>
        <div className="calendarandadd">
        <Calendar onChange={onChange} className="calendartable" value={value} />
        {/* <div className="addapp">
            <p className="addapphead" >Add an appointment</p>
            <button className="button buttonbook">+
</button>

        </div> */}
        </div>
        </div>
        </div>
    )
}