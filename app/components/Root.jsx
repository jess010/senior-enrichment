import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import CampusList from './CampusList.jsx'
import Students from './Students.jsx'
import SingleCampus from './SingleCampus.jsx'
import NewCampusEntry from './NewCampusEntry.jsx'
import NewStudentEntry from './NewStudentEntry.jsx'
import SingleStudent from './SingleStudent.jsx'
import store from '../store.jsx'
import { fetchCampuses } from '../reducers/campuses.jsx'
import { fetchStudents, deleteStudentRecord } from '../reducers/students.jsx'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export default class Root extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();

        this.deleteStudent = this.deleteStudent.bind(this)
    }

    componentDidMount () {
        const campusesThunk = fetchCampuses();
        const studentsThunk = fetchStudents();
        store.dispatch(campusesThunk);
        store.dispatch(studentsThunk);
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount () {
        this.unsubscribe()
    }

    deleteStudent () {
        event.preventDefault()
        console.log("Delete student has been clicked")
        const deleteStudentThunk = deleteStudentRecord(id)
        store.dispatch(deleteStudentThunk)
    }

    render () {
        const students = this.state.students

        return (
            <div id="main" className="container-fluid">
                <Router>
                    <div>
                    <Navbar />
                        <Switch>
                            <Route path="/campuses/add" component={NewCampusEntry} />
                            <Route path="/campuses/:campusId" component={SingleCampus} />
                            <Route path="/students/add" component={NewStudentEntry} />
                            <Route path="/students/:studentId" component={SingleStudent} />
                            <Route path="/students/" render={() => <Students students={students} deleteStudent={this.deleteStudent} />} />
                            <Route path="/campuses/" component={CampusList} />
                            <Route path="/" component={CampusList} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}


