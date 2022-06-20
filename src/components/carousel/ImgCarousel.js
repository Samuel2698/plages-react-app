import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Martinique from '../../assets/martinique.jpg'
import LosRoques from '../../assets/los_roques.jpg'
import Oahu from'../../assets/oahu.jpg'


const ImgCarousel = () => {
  return (
    <div name='bouqin' className='container'>
        <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
            <div>
                <img src={Oahu} alt="Une plage de Oahu" />
                {/* <p className="legend">Oahu</p> */}
            </div>
            <div>
                <img src={LosRoques} alt="Une plage de Los Roques" />
                {/* <p className="legend">Los Roques</p> */}
            </div>
            <div>
                <img src={Martinique} alt="Une plage de la Martinique" />
                {/* <p className="legend">Bora Bora</p> */}
            </div>
        </Carousel>
    </div>
  )
}

export default ImgCarousel