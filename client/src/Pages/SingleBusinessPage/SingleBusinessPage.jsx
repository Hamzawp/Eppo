import React from 'react'
import BusinessHeader from '../../Components/BusinessPage/BusinessHeader'
import BusinessProfile from '../../Components/BusinessPage/BusinessProfile'
import Navbar from '../../Components/Navbar/Navbar'
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'

const SingleBusinessPage = () => {
  return (
    <div>
      <VerticalNavbar/>
      <Navbar/>
      {/* <BusinessHeader/> */}
      <BusinessProfile/>
    </div>
  )
}

export default SingleBusinessPage
