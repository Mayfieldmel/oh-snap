import React from 'react'
import photo from '../../assets/small/commercial/0.jpg';

// PhotoList component is child of Gallery
function PhotoList() {
  return (
    <div>
        <img
          src={photo}
          alt="Commercial Example"
        />
    </div>
  )
}

export default PhotoList;