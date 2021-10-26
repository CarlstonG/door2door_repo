import React from 'react'
import Hero_Banner from './img/2.jpeg'

import {Button} from '../Button/Button'
import *  as RiIcon from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'

import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-container">
           <img src={Hero_Banner} alt="HeroImage"/>
            <h1>DOOR2DOOR <span><MdIcons.MdOutlineDeliveryDining/></span></h1>
            <h2>Sameday Delivery</h2>
            <p><span>You</span> crave, <span>We</span> delivery</p>
            <div className="hero-btn">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    <span><RiIcon.RiContactsBookUploadFill/> </span> 
                     ORDER NOW!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
