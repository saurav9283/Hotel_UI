import React from 'react'
import "./Reserve.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
const Reserve = ({setOpen , hotelId}) => {
  return (
    <div className='reserve'>
      <div className='rcontainer'>
        <FontAwesomeIcon icon={faCircleXmark} className='rclose' onClick={() => setOpen(false)}/>
        <span>Select your Rooms:</span>
      </div>
    </div>
  )
}

export default Reserve
