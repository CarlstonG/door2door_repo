import React, {useState} from 'react'
import {InfoData} from './InfoData'

import './Info.css'


const InfoSection = () => {


    return (
        <div className="container-wrap">
            <div className="container">
                    {InfoData.map((item, index) =>{
                        return<div key={index} className="card">
                            
                            <div className="face face1">
                            <img src={item.ImgSrc}/>
                            <div className="content">
                            <h3>{item.title}</h3>
                            </div>
                            </div>    
                               
                            <div className="face face2">
                            
                                <div className="content">
                                    <p>{item.lineText}</p>
                                </div>
                            </div>
                        
                        </div>
                    })}
                    </div>
        </div>
    )
}

export default InfoSection
