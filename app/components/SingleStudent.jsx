import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import store from '../store.jsx'
//import { connect } from 'react-redux'


export default class SingleStudent extends Component {
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
        const studentId = Number(this.props.match.params.studentId)
        const students = this.state.students
        const student = students.filter(stud => stud.id === studentId)
        console.log(student)

        return (
            <div>
                {students.length &&
                <div key={student.id}>
                    <h1>{`Student Profile - ${student.name}`}</h1>
                    <p>{`Attending Campus: ${students.campus.name}`}</p>
                    <p>{`Email: ${student.email}`}</p>
                    <p>{`Address: ${student.address}`}</p>
                    <p>{`Phone: ${student.phone}`}</p>
                    <p>{`DOB: ${student.dob}`}</p>
                </div>
                }
            </div>
        )
    }

}
