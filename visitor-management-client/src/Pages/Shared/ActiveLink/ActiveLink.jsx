import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive, isPending})=>
        isActive ? "text-orange-300 font-bold" : isPending ? "pending" : "text-white"
    }
    >
        {children}
    </NavLink>
);
    
};

export default ActiveLink;