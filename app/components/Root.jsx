import React, { Component } from 'react'
// import Navbar from './Navbar.jsx'
import CampusList from './CampusList.jsx'
import Students from './Students.jsx'
import store from '../store.jsx'
import { fetchCampuses } from '../reducers/campuses.jsx'
import { fetchStudents } from '../reducers/students.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class Root extends Component {

    componentDidMount () {
        const campusesThunk = fetchCampuses();
        const studentsThunk = fetchStudents();
        store.dispatch(campusesThunk);
        store.dispatch(studentsThunk);
    }

    render () {
        return (
            <div id="main" className="container-fluid">
                <Router>
                    <Switch>
                        <Route path="/campuses/:campusId" component={Students} />
                        <Route path="/campuses/" component={CampusList} />
                    </Switch>
                </Router>
            </div>
        )
    }
}


