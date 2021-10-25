import React from 'react'
import { Link } from 'react-router-dom'

import './Hero.css'
import ImageBanner from './img/1.jpeg'
import * as MdIcons from 'react-icons/md'
import *  as RiIcon from 'react-icons/ri'

const Hero = () => {
    return (
        <div>
            <div className="home__container">
                <div className="hero_text">
                    <h1>
                        DOOR2DOOR <span className="logo_hero"><MdIcons.MdOutlineDeliveryDining/></span>
                    </h1>
                    <h2>Sameday Delivery....</h2>
                    <h2 data-text="Always Remember That Whatever You Crave, We Deliver!">Always Remember That Whatever You Crave, We Deliver!</h2>
                    <div class="box-3">
                        <Link to="/info">
                        <div class="btn btn-three">

                            <span><RiIcon.RiContactsBookUploadFill/> ORDER NOW!</span> 
                        </div>
                        </Link>
                        </div>
                </div>
            <div className="image_container">
              <img src={ImageBanner}/>
            </div>
        </div>
       
        </div>
    )
}

export default Hero
