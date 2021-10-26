import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import * as AiIcons from 'react-icons/ai' 
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'

import { SidebarData } from './SidebarData'
import {IconContext} from 'react-icons'

import './Navbar.css'


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar) //true

    return (
        <>
        <IconContext.Provider value={{color: 'orange'}}>
         <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <Link to="/">
            <span className="logo">D2D</span>
            <MdIcons.MdOutlineDeliveryDining/>
            </Link>
            
        </div>  
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <span>
                        <AiIcons.AiOutlineClose/>
                        </span>
                    </Link>
                </li>
                {SidebarData.map((item, index) =>{
                    return(
                        <li key={index} 
                        className={item.cName}>
                            <Link className="Nav_items" to={item.path}>
                                <span>
                                {item.icon} {item.title}
                                </span>
                                
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
