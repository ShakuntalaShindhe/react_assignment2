import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import './Rating.css';

const DynamicRating = () => {
    const[rating,setRating]=useState(0)
  return (
    <div className='container'>
        <Typography variant='h6' className='text'>Dynamic Rating</Typography>
       <Stack spacing={1}>
      <Rating
      name="half-rating" 
      value={rating}
      className='stars'
     onChange={(e)=>setRating(Number(e.target.value))}
    //or onChange={(e,newValue)=>setRating(newValue)}
     />
     <Typography className='text'> {rating} stars</Typography>
    </Stack>
    </div>
  )
}

export default DynamicRating
