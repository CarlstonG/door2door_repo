import React,{useState} from 'react'
import {CategoryData} from './CategoryData'

import './Catergory.css'

const CategorySection = () => {
  
    return (
        <>    
        <div className="container_cat">
        {CategoryData.map((item) =>{
                return ( 
                <article className="card_item" key={item.id}>
                <a href="#" className="card__link">
                <div className="card__icon">
                    <img src={item.image} alt="Image_Food" />
                </div>
                <div className="card__media">
                    <svg viewbox="0 0 1129 994">
                        <g fill="none" fill-rule="nonzero" stroke="#F5F5F5" stroke-width="41">
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"/>
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"/>
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"/>
                        </g>
                    </svg>
                </div>
    
                
                <div className="card__header">
                    <h3 className="card__header-title">Title of Card</h3>
                    <p className="card__header-meta">Subtitle</p>
                    <div className="card__header-icon">
                    
                    </div>
                </div>
                
            </a>
        </article>)
        })}
</div>

                  
           

         
        </>
    )
}

export default CategorySection
