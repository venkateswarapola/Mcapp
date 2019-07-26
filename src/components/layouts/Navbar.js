import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper darken-3">
            <div className="container">
                <a to='/' className="brand-logo">MCS</a>
                <ul className="right">
                <li><NavLink to='/members'>Our Cool Team</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

const mapstateProps = (state) => {
    console.log(state);
    return{

    }
}

export default connect(mapstateProps)(Navbar);