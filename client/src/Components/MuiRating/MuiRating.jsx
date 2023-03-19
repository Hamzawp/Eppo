import React from 'react'
import { Stack, Rating } from '@mui/material';
import { useState } from 'react';
const MuiRating = () => {
    // const [value, setValue] = useState<number | null>(null)
    const [value, setValue] = useState(null);

    // const handleChange = (event, newValue) => {
    //     console.log(setValue(newValue));
    //   };
      
  return (
    <div>
      <Stack spacing={2}>
        <Rating value={value} onChange={(e, val) => {
            setValue(val)
            console.log(val)
        }}/>
      </Stack>
    </div>
  )
}

export default MuiRating
