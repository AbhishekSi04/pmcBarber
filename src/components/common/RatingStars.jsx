import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { useState } from 'react';
import { useEffect } from 'react';

const RatingStars = ({ rating, starSize = 20 }) => {
  const [starCounts, setStarCounts] = useState({
    full: 0,
    half: 0,
    empty: 0
  })


  useEffect(() => {
    setStarCounts({
      full: Math.floor(rating),
      half: Number.isInteger(rating) ? 0 : 1,
      empty: 5 - Math.floor(rating) - (Number.isInteger(rating) ? 0 : 1)
    })
  }, [rating])


  return (
    <div className='' >


      <div className='flex gap-1 text-yellow-100' >
        {
          [...new Array(starCounts.full)].map((_, ind) => (
            <TiStarFullOutline key={ind} size={starSize} />
          ))
        }

        {
          [...new Array(starCounts.half)].map((_, ind) => (
            <TiStarHalfOutline key={ind} size={starSize} />
          ))
        }

        {
          [...new Array(starCounts.empty)].map((_, ind) => (
            <TiStarOutline key={ind} size={starSize} />
          ))
        }
      </div>
    </div>
  )
}

export default RatingStars
