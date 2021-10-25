import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'


export const SidebarData = [
    {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
        title: 'Info',
        path: '/info',
        icon: <AiIcons.AiFillInfoCircle/>,
        cName: 'nav-text'
        },
        {
            title: 'Category',
            path: '/category',
            icon: <BiIcons.BiCategoryAlt/>,
            cName: 'nav-text'
            } ,
            {
                title: 'Promos',
                path: '/promos',
                icon: <AiIcons.AiFillStar/>,
                cName: 'nav-text'
                },
                {
                    title: 'Testimonials',
                    path: '/testimonials',
                    icon: <GiIcons.GiHumanEar/>,
                    cName: 'nav-text'
                    }     
]