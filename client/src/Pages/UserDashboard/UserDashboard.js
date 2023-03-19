import './UserDashboard.css'
import React, { useState } from 'react';
import BasicTable from '../../Components/CustomizedTable/CustomizedTable';
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import Navbar from '../../Components/Navbar/Navbar'
import upcoming from './upcoming.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import pending from './pending.png';
import queue from './queue.png'

export default function UserDashboard(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="containerofuser">
        <Navbar />
        <VerticalNavbar />
        <div  className="container1table">
        <div className="tablediv">
        <div className="upcomingappts">
        <img src={upcoming} className="upcomingimg" alt="" />
        <p className="tableheading"><span className="upcomingtext">Confirmed</span> Appointments</p>
        </div>
        <BasicTable />
        </div>
        <div className="calendarandadd">
        <Calendar onChange={onChange} className="calendartable" value={value} />
        <div className="addapp">
            <p className="addapphead" >Add an appointment</p>
            <button className="button buttonbook">+
</button>

        </div>
        </div>
        </div>
        {/* <div>
      <Calendar onChange={onChange} value={value} />
    </div> */}
        <div  className="container1table">
        <div className="tablediv">
        <div className="upcomingappts">
        <img src={pending} className="upcomingimg" alt="" />
        <p className="tableheading"><span className="pasttext">Requested</span> Appointments</p>
        </div>
        <BasicTable />
        </div>
        <div className="calendarandadd">
        <Calendar onChange={onChange} className="calendartable" value={value} />
        <img src={queue} className="queueimg"></img>
        </div>

        {/* <div className="addapp">
            <p className="addapphead" >Add<br></br> an<br></br> appointment</p>
            <button className="button buttonbook">+
</button>
        </div> */}
        </div>


        </div>
    )
}