import React, { Component } from 'react'
import store from '../store'
import { postCampus } from '../reducers/campuses'
//import { connect } from 'react-redux'
// import axios from 'axios'


export default class NewCampusEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campusName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount () {

    // }

    handleChange (event) {
        const val = event.target.value
        this.setState({campusName: val})
    }

    handleSubmit (event) {
        event.preventDefault()
        const name = this.state.campusName
        store.dispatch(postCampus({ name }))
    }
    // addCampus (name) {
    // //     axios.post('/api/campuses', { name })
    // //     .then(res => res.data)
    // //     .then(newCampus => {
    // //         this.setState(prevState => ({
    // //             stories: [...prevState.campuses, newCampus]
    // //         }));
    // //     })
    // }

    render () {
        return (
        <div>
            <h1>Add A Campus</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Add A Campus</label>
                <input
                  value={this.state.campusName}
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="campusName"
                  placeholder="Enter campus name"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">Create Campus</button>
              </div>
            </form>
        </div>
        )
    }
}
