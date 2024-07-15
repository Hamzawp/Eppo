import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Navbar from "../../Components/Navbar/Navbar";
import VerticalNavbar from "../../Components/VerticalNavbar/VerticalNavbar";
import bank from "../../Components/CategoryCard/bank.png";
import barber from "../../Components/CategoryCard/barber.png";
import Automotive from "../../Components/CategoryCard/automotive.png";
import health from "../../Components/CategoryCard/healthcare.png";
import fitness from "../../Components/CategoryCard/fitness.png";
import pet from "../../Components/CategoryCard/pet.png";
import retail from "../../Components/CategoryCard/retail.png";
import tutor from "../../Components/CategoryCard/tutor.png";
import homeservices from "../../Components/CategoryCard/homeservices.png";
import realestate from "../../Components/CategoryCard/realestate.png";
import businessservices from "../../Components/CategoryCard/businessservice.png";
import medicaloffice from "../../Components/CategoryCard/medicaloffice.png";
import nonprofit from "../../Components/CategoryCard/nonprofit.png";
import professional from "../../Components/CategoryCard/professional.png";
import "./BrowseCategory.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function BrowseCategory() {
  return (
    <div className="BrowseCategoryContainer">
      <VerticalNavbar />
      <Navbar />

      <h1 style={{ marginTop: "1em" }}>Categories</h1>
      <div className="cardgrid">
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Salon and Beaut" image={bank} />
        </Link>

        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Barber" image={barber} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Health" image={health} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Banking and Finance" image={bank} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Automotive" image={Automotive} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Fitness and Exercise" image={fitness} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Pet Services" image={pet} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Retail" image={retail} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Tutoring Services" image={tutor} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard
            name="Home Services and Cleaning"
            image={homeservices}
          />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Real Estate" image={realestate} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Business Services" image={businessservices} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Medical Office" image={medicaloffice} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Education and Non-Profits" image={nonprofit} />
        </Link>
        <Link
          to="/SingleCategoryPage"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CategoryCard name="Professional" image={professional} />
        </Link>
      </div>

      <div className="categoryfooter">
        <Footer />
      </div>
    </div>
  );
}
