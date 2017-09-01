import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
//import store from '../store.jsx'
//import { connect } from 'react-redux'
import axios from 'axios'


export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }

    componentDidMount () {
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            this.setState({ students })
        })
    }

    render () {
        const campusId = Number(this.props.match.params.campusId)
        const students = this.state.students
        const filteredStudents = students.filter(student => student.campusId === campusId)



        return (
        <div>
            <h1>Students</h1>
            <ul className="media-list">
                { filteredStudents.map(student => <li key={student.id} className="student-list">{student.name}</li>
                )}
            </ul>
        </div>
        )
    }

}
