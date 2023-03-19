import * as React from 'react';
import './ReviewDisplay.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

const ReviewDisplay = () => {
    const [value, setValue] = React.useState(4);
  return (
    <div>
      <div className="parentReviewDisplay">
        <div className="headingReviewDisplay">
            <div className="headingsdisplay">
                <h2>Master User #1</h2>
                <p>masterhabibi@gmail.com</p>
            </div>
            <div className="ratingdisplay">
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                        }}
                >
                    {/* <Typography component="legend">Read only</Typography> */}
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>
        </div>
        <div className="paraReviewDisplay">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis in, tempore iste quos quae, aliquid minima nesciunt odit cum perferendis, quaerat alias exercitationem earum commodi dignissimos inventore! Optio, odio rerum? Eaque iure id sunt!</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewDisplay
