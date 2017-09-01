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
                    <li><NavLink to={'/campuses/'}>Home</NavLink></li>
                    <li><NavLink to={'/campuses/'}>Campuses</NavLink></li>
                    <li><NavLink to={'/students/'}>Students</NavLink></li>
                </ul>
            </nav>
        )
    }
}

