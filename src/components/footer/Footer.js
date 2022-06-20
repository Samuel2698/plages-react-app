import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='top'>     
                <h3>PLAGES</h3>
                <div className='social'>
                    <FaFacebook className='icon' />
                     <FaInstagram className='icon' />
                     <FaTwitter className='icon' />
                     <FaPinterest className='icon' />
                     <FaYoutube className='icon' />
                </div>
            </div>
            <div className='bottom'>
                <div className='left'></div>
                    <ul>
                        <li>A propos de nous</li>
                        <li>Service</li>
                        <li>Télécharger l'appli</li>
                        <li>Vous préparer</li>
                        <li>Où aller?</li>
                    </ul>
                <div className='right'>
                    <ul>
                        <li>Accessibilité</li>
                        <li>Mentions légales</li>
                        <li>Crédits</li>
                        <li>Politique de confidentialité</li>
                        <li>Politique de cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer