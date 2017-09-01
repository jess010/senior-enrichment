import React, { Component } from 'react'
import store from '../store'
import { postStudent } from '../reducers/students'
//import { connect } from 'react-redux'
// import axios from 'axios'


export default class NewStudentEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: '',
            campusName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStudentNameChange = this.handleStudentNameChange.bind(this)
        this.handleCampusNameChange = this.handleCampusNameChange.bind(this)
    }


    handleStudentNameChange (event) {
        const val = event.target.value
        this.setState({studentName: val})
        console.log(this.state.studentName)
    }

    handleCampusNameChange (event) {
        const val = event.target.value
        this.setState({campusName: val})
        console.log(this.state.campusName)
    }

    handleSubmit (event) {
        event.preventDefault()
        const studentName = this.state.studentName
        //const campusName = this.state.studentName
        store.dispatch(postStudent({
            name: studentName
            // campusId: ??? || null
        }))
    }


    render () {
        return (
        <div>
            <h1>Add A New Student</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Student Name: </label>
                <input
                  value={this.state.studentName}
                  onChange={this.handleStudentNameChange}
                  className="form-control"
                  type="text"
                  name="studentName"
                  placeholder="Enter student name"
                />
                <label htmlFor="name">Campus (Optional): </label>
                <input
                  value={this.state.campusName}
                  onChange={this.handleCampusNameChange}
                  className="form-control"
                  type="text"
                  name="campusName"
                  placeholder="Enter campus name"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">Add New Student</button>
              </div>
            </form>
        </div>
        )
    }
}
