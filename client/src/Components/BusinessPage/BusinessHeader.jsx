import React from "react";
import "./BusinessHeader.css";

const BusinessHeader = () => {
  return (
    <div>
      <div className="parentBusinessHeader">
        <div className="catgeoryBusinessHeader">
          <h1>Barbers</h1>
        </div>
        <div className="nameBusinessHeader">
          <h2>Javed Habib Hair & Beauty</h2>
        </div>
        <div className="navbtnsBusinessHeader">
          <a class="fancy" href="#">
            <span class="top-key"></span>
            <span class="text">Login / Signup</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
