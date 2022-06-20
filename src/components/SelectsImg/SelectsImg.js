import React from 'react'
import './SelectsImgStyles.css'

const SelectsImg = ({bgImg, text}) => {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="Vue paradisiaque d'une plage" />
        <div className='overlay'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SelectsImg