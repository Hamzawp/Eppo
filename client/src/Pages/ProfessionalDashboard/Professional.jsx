import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import Navbar from '../../Components/Navbar/Navbar'
import './Professional.css'
import { FaLaptopMedical } from 'react-icons/fa'
import DataTable from 'react-data-table-component'
import 'react-calendar/dist/Calendar.css';
import { columns, column } from '../../Components/data'
import { useSelector } from 'react-redux';
import CustomizedTables from '../../Components/CustomizedTable/CustomizedTable';

const Professional = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [value, onChange] = useState(new Date());

  return (
    <>
      <VerticalNavbar />
      <Navbar />

      <div className="ProffName">
        <h1>Good Evening, {user && user.details.username}</h1>
        <p>Have a nice day at work</p>

        <img src="https://img.freepik.com/free-vector/appointment-booking-calendar-design_23-2148573174.jpg?w=2000" alt="" />
      </div>

      <div className="WeeklyReportContainer">
        <h1>Weekly Report</h1>
        <div className="WeeklyReports">
          <div className="ReportBx">
            <i><FaLaptopMedical /></i>
            <span>Total Patients</span>
            <p>580</p>
          </div>
          <div className="ReportBx">
            <i><FaLaptopMedical /></i>
            <span>Appointments</span>
            <p>580</p>
          </div>
        </div>
      </div>

      <div className='TAbles'>

        <div className="bookedApp">
          <h1>Requested Appointment</h1>
          <CustomizedTables />
          {/* <DataTable
            columns={columns}
            data={bookings.data}
          /> */}
        </div>

        <div className="SchApp">
          <h1>Scheduled Appointment </h1>
          <CustomizedTables />
          {/* <DataTable
            columns={column}
            data={bookings.data}
          /> */}
        </div>
      </div>

      <div className='CalenderDashBoard'>
        <Calendar onChange={onChange} value={value} />
      </div>


    </>
  )
}

export default Professional