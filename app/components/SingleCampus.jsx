import React, { Component } from 'react'
import store from '../store.jsx'
//import { connect } from 'react-redux'
import Students from './Students.jsx'


export default class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount () {
        this.unsubscribe()
    }

    render () {
        const campusId = Number(this.props.match.params.campusId)
        const students = this.state.students
        const filteredStudents = students.filter(student => student.campusId === campusId)


        return (
            <div>
                {students.length && filteredStudents[0].campus.length &&
                <div key={campusId}>
                    <h1>{`${filteredStudents[0].campus.name} Campus`}</h1>
                    <div>
                        <img src={filteredStudents[0].campus.image} />
                        <p>{`Campus Name: ${filteredStudents[0].campus.name}`}</p>
                        <p>{`Date Opened: ${filteredStudents[0].campus.date_added}`}</p>
                    </div>
                </div>
                }
                <div>
                    <Students students={filteredStudents} />
                </div>
            </div>
        )
    }

}

// {Object.keys(students[0].campus).map(field => {
//     return <p key={field}>{`${field}: ${students[0].campus.field}`}</p>
// })}
