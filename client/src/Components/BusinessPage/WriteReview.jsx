import { useState } from 'react';
import './WriteReview.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MuiRating from '../MuiRating/MuiRating';

const WriteReview = () => {
  const [value, setValue] = React.useState(2);
  const [inpVal, setinpVal] = useState({
    writeReview: "",
  });
  const [data, setData] = useState([]);
  const addData = (e) =>{
    e.preventDefault();
    const writeReview = inpVal;
    if(writeReview === ""){
      alert("Please enter review");
    }
    else{
      console.log(...data, inpVal)
    }
    
  }

  const getData = (e) =>{
    const {value, name} = e.target;
    setinpVal(() => {
      return {
        ...inpVal,
        [name] : value
      }
    })
  }

  return (
    <div>
      <div className="parentWriteReview">
        <div className="headingwritereview">
            <h2>Write a Review</h2>
            {/* <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              
              <Rating name="no-value" value={null} /> 
            </Box>*/}
            <MuiRating/>
        </div>
        <div className="textareawritereview">
            <textarea cols="70" rows="4" name="writeReview" onChange={getData}></textarea>
        </div>
        <div className="buttonsWriteReview">
            <button onClick={addData}>POST</button>
        </div>
      </div>
    </div>
  )
}

export default WriteReview
