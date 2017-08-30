import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <ul>
                    <li><NavLink to="Home.jsx">Home</NavLink></li>
                    <li><NavLink to="Students.jsx">Students</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar

