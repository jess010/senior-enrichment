import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <ul>
                    <li><NavLink to="Home.jsx">Home</NavLink></li>
                    <li><NavLink to="Students.jsx">Campuses</NavLink></li>
                    <li><NavLink to="Students.jsx">Students</NavLink></li>
                </ul>
            </nav>
        )
    }
}

