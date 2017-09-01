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
        const currentCampus = this.state.campuses.filter(campus => campus.id === campusId)[0]
        console.log(currentCampus)
        const students = this.state.students
        const filteredStudents = students.filter(student => student.campusId === campusId)


        return (
            <div>
                <div key={campusId}>
                    <h1>{`${currentCampus.name} Campus`}</h1>
                    <div>
                        <img src={currentCampus.image} />
                        <p>{`Campus Name: ${currentCampus.name}`}</p>
                        <p>{`Date Opened: ${currentCampus.date_added}`}</p>
                    </div>
                </div>
                <div>
                    { filteredStudents.length
                        ? <Students students={filteredStudents} />
                        : <p><em>There are no students currently enrolled at this campus</em></p>
                    }
                </div>
            </div>
        )
    }

}

// {Object.keys(students[0].campus).map(field => {
//     return <p key={field}>{`${field}: ${students[0].campus.field}`}</p>
// })}
