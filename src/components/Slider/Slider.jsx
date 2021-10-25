import React, {useState} from 'react'
import SliderData from './SliderData'


const Slider = () => {
    return (
        <div className="container-slider">
            {SliderData.map((obj, index) => {
                <div>
                    <img src={process.send.PUBLIC_URL + `/Imgs/img${index + 1}.jpeg`} alt="Banner Images"/>
                </div>
            })}
        </div>
    )
}

export default Slider
