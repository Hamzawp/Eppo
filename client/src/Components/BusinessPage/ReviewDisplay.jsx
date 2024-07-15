import * as React from "react";
import "./ReviewDisplay.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';

const ReviewDisplay = ({ userName, userEmail, rating, reviewText }) => {
  const [value, setValue] = React.useState(4);
  return (
    <div>
      <div className="parentReviewDisplay">
        <div className="headingReviewDisplay">
          <div className="headingsdisplay">
            <h2>{userName}</h2>
            <p>{userEmail}</p>
          </div>
          <div className="ratingdisplay">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={rating} readOnly />
            </Box>
          </div>
        </div>
        <div className="paraReviewDisplay">
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisplay;
