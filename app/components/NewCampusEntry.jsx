import React, { Component } from 'react'
//import store from '../store.jsx'
//import { connect } from 'react-redux'
import axios from 'axios'


export default class NewCampusEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: ''
        }
        this.addCampus = this.addCampus.bind(this)
    }

    componentDidMount () {
    }

    addCampus (name) {
    axios.post('/api/campuses', { name })
    .then(res => res.data)
    .then(newCampus => {
        this.setState(prevState => ({
            stories: [...prevState.campuses, newCampus]
        }));
    })}

    render () {
        return (
        <div>
            <ul>
                {this.state.campuses.map(campus => {
                    <div key={campus.id} className="listing">
                        <NavLink to={`/campuses/${campus.id}`} activeClassName="active">
                            <figure><img src={campus.img} />
                                <figcaption>{campus.name}</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                })}
            </ul>
        </div>
        )
    }
}
