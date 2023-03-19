import Navbar from '../../Components/Navbar/Navbar'
import VerticalNavbar from '../../Components/VerticalNavbar/VerticalNavbar'
import ProductCard from '../../Components/productCard/ProductCard'
import './Homepage.css'
import rightarrow from './right-arrow.png'
import categories from './categories.png'
import { Link, Navigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




export default function Homepage(){

    // function handleClick(){
    //     // window.location.href=  "./BrowserCategory"
    //     // return(
    //         // <Navigate to="/BrowseCategory" >
    //         // </Navigate>
    //         {/* <div className="browsecategories" onClick={handleClick}>
    //     <div className="categoryheading">
    //     <img src={categories} className="category" alt="" />
    //     <p>Browse Categories</p>
    //     </div>
    //     <img src={rightarrow} className="rightarrow" alt="" />
    //     </div>
    //     </Navigate> */}
    //     // )
    //     // navigate('/BrowserCategory')
    // }
    return(
        <div className="container">
        <Navbar />
        <VerticalNavbar />
        <div className="homepagecontent">
        <div className="section1div">
        <div className="book">
        <div className="paras">
            <div className="gm">Good Morning,Parth
            <p className="subheading">Book an appointment</p>
            </div>
            </div>
            <Link to='/BrowseCategory'>
            <button className="button buttonbook">Add<br></br>Appointment  
            </button>
            </Link>
        </div>
        {/* <Navigate to="/BrowseCategory" /> */}
        <Link to='/BrowseCategory'>
        <div className="browsecategories">
        <div className="categoryheading">
        <img src={categories} className="category" alt="" />
        <p>Browse Categories</p>
        </div>
        <img src={rightarrow} className="rightarrow" alt="" />
        </div>
        </Link>

        </div>
        <div className="highestrated">
            <p className="hightitle">Best Service Providers</p>
            <div className="carousel">
            <ProductCard />
            </div>
        </div>

        <div className="locationservice highestrated">
            <p className="locationservice hightitle">Services in your Location</p>
            <div className="carousel">
            <ProductCard />
            </div>
        </div>

        <div className="locationservice highestrated">
            <p className="locationservice hightitle">Previously Appointed</p>
            <div className="carousel">
            <ProductCard />
            </div>
        </div>
        </div>
        </div>
    )
}