import React, { Component } from 'react'
// import Navbar from './Navbar.jsx'
import CampusList from './CampusList.jsx'
// import store from '../store.jsx'
// import { fetchCampuses } from '../reducers/campuses.jsx'
// import { fetchStudents } from '../reducers/students.jsx'

export default class Root extends Component {

    // componentDidMount () {
    //     const campusesThunk = fetchCampuses();
    //     const studentsThunk = fetchStudents();
    //     store.dispatch(campusesThunk);
    //     store.dispatch(studentsThunk);
    // }

    render () {
        return (
            <div id="main" className="container-fluid">
                <CampusList />
            </div>
        )
    }
}


