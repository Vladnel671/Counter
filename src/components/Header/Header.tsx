import {NavLink} from "react-router-dom";
import React from "react";
import '../Header/Header.css'

export const Header = () => {
    return (
            <div className='header'>
                <NavLink to="/counter"  style={{textDecoration: "none"}}><h3 className='counter'>Counter</h3></NavLink>
                <NavLink to="/counterV2" style={{textDecoration: "none"}}><h3 className='counterV2'>Counter V2</h3></NavLink>
                <NavLink to="/counterWithRedux" style={{textDecoration: "none"}}><h3 className='counterWithRedux'>Counter with Redux</h3></NavLink>
            </div>
    )
}