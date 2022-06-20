import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/bora_bora.jpg'
import Bali from '../../assets/bali.jpg'
import LosRoques from '../../assets/los_roques.jpg'
import Maldives from '../../assets/maldives.jpg'
import Martinique from '../../assets/martinique.jpg'
import Cancun from'../../assets/cancun.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'

const Selects = () => {
  return (
    <div name='photos' className='selects'>
      <div className='container'>
        <SelectsImg bgImg={Cancun} text='Cancun' />
        <SelectsImg bgImg={BoraBora} text='Bora Bora' />
        <SelectsImg bgImg={Bali} text='Bali' />
        <SelectsImg bgImg={LosRoques} text='Los Roques' />
        <SelectsImg bgImg={Maldives} text='Maldives' />
        <SelectsImg bgImg={Martinique} text='Martinique' />
        </div>
    </div>
  )
}

export default Selects