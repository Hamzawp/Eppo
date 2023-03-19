import React, { useState } from 'react';
import Calendar from 'react-calendar';
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import Navbar from '../../Components/Navbar/Navbar'
import './Professional.css'
import { FaClinicMedical, FaLaptopMedical } from 'react-icons/fa'
import DataTable from 'react-data-table-component'
import 'react-calendar/dist/Calendar.css';
import { columns, column, data } from '../../Components/data'

const Professional = () => {
  const [value, onChange] = useState(new Date());

  // const columns = [
  //   {
  //     name: 'Sr. No',
  //     selector: row => row.srno,
  //     sortable: true
  //   },
  //   {
  //     name: 'Name',
  //     selector: row => row.name,
  //     sortable: true
  //   },
  //   {
  //     name: 'Date',
  //     selector: row => row.date,
  //     sortable: true
  //   },
  //   {
  //     name: 'Number',
  //     selector: row => row.number,
  //     sortable: true
  //   },
  //   {
  //     name: 'Checked',
  //     cell: (row) => (
  //       <div className="accDecBtn">
  //         <button className='accbtn'><FaCheck /></button>
  //         <button className='decbtn'>X</button>
  //       </div>

  //     )
  //   },
  // ]

  // const column = [
  //   {
  //     name: 'Sr. No',
  //     selector: row => row.srno,
  //     sortable: true
  //   },
  //   {
  //     name: 'Name',
  //     selector: row => row.name,
  //     sortable: true
  //   },
  //   {
  //     name: 'Date',
  //     selector: row => row.date,
  //     sortable: true
  //   },
  //   {
  //     name: 'Number',
  //     selector: row => row.number,
  //     sortable: true
  //   },
  //   {
  //     name: 'Checked',
  //     cell: (row) => (
  //       <div className="accDecBtn">
  //         <button className='decbtn'>X</button>
  //       </div>

  //     )
  //   },
  // ]

  // const data = [
  //   {
  //     id: 1,
  //     srno: 15,
  //     name: 'test',
  //     date: '15 Jan',
  //     number: '784523'
  //   },
  //   {
  //     id: 2,
  //     srno: 11,
  //     name: 'test',
  //     date: '15 Jan',
  //     number: '784523'
  //   },
  //   {
  //     id: 3,
  //     srno: 26,
  //     name: 'test',
  //     date: '15 Jan',
  //     number: '784523'
  //   },
  //   {
  //     id: 4,
  //     srno: 37,
  //     name: 'test',
  //     date: '15 Jan',
  //     number: '784523'
  //   },
  //   {
  //     id: 5,
  //     srno: 45,
  //     name: 'test',
  //     date: '15 Jan',
  //     number: '784523'
  //   },
  // ]

  return (
    <>
    <VerticalNavbar />  
    <Navbar />

    <div className="ProffName">
      <h1>Good Evening, Parth</h1>
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
        {/* <BasicTable /> */}
        <DataTable
          columns={columns}
          data={data}
        />
      </div>

      <div className="SchApp">
        <h1>Scheduled Appointment </h1>
        <DataTable
          columns={column}
          data={data}
        />
      </div>
    </div>
    
    <div className='CalenderDashBoard'>
      <Calendar onChange={onChange} value={value} />
    </div>
    

    </>
  )
}

export default Professional