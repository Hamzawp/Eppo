import React from 'react'
import { FaUser, FaBars, FaChartBar, FaMoneyBill, FaLastfm, FaHome, FaStar } from 'react-icons/fa'
import './VerticalNavbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/slices/userSlice'

const VerticalNavbar = () => {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch(logOut());
    };
    return (
        <>
            <div className="verticalNavContainer">
                <section className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <div className="logo">
                                    <i className="fa-sharp fa-solid fa-font-awesome"><FaBars /></i>
                                    <span>EPPO</span>
                                </div>
                                <li>
                                    <div>
                                        <i className="fas"><FaChartBar /></i>
                                        <Link to='/Dashboard'><span className="nav-items">Dashboard</span></Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i className="fas"><FaLastfm /></i>
                                        <Link to='/PreviousAppo'><span className="nav-items">Previous Appo</span></Link>
                                    </div>
                                </li>
                                {user?.profession == "user" &&
                                    <li>
                                        <div>
                                            <i className="fas"><FaHome /></i>
                                            <Link to='/HomePage'><span className="nav-items">Home Page</span></Link>
                                        </div>
                                    </li>
                                }
                                <li>
                                    <div>
                                        <i className="fas"><FaStar /></i>
                                        <Link to='/Feedback'><span className="nav-items">Feedback</span></Link>
                                    </div>
                                </li>
                                <li>
                                    <div >
                                        <i className="fas"><FaUser /></i>
                                        <Link to='/Login'><span className="nav-items" onClick={handleClick}>Logout</span></Link>
                                    </div>
                                </li>

                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </>
    )
}

export default VerticalNavbar