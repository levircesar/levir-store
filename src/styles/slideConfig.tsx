/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
const properties = {
  duration: 3000,
  transitionDuration: 500,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  prevArrow: (
    <div
      style={{
        display: 'block',
        width: '30px',
        marginRight: '-30px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1
      }}
    >
      <FaAngleLeft />
    </div>
  ),
  nextArrow: (
    <div
      style={{
        display: 'block',
        width: '30px',
        marginLeft: '-30px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1
      }}
    >
      <FaAngleRight />
    </div>
  )
}

export default properties
