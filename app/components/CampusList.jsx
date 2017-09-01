import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import store from '../store.jsx'
// import { connect } from 'react-redux'
// import axios from 'axios'

export default class CampusList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount () {
        this.unsubscribe()
    }


    render () {
        return (
        <div>
            <h1>Campuses</h1>
            <ul>
                {this.state.campuses.map(campus => {
                    return (
                        <div key={campus.id} className="listing">
                            <NavLink to={`/campuses/${campus.id}`}>
                                <row>
                                    <img src={campus.image} />
                                    <h2>{campus.name}</h2>
                                </row>
                            </NavLink>
                        </div>
                    )
                })}
            </ul>
        </div>
        )
    }
}





// function mapStateToProps (state) {
//   return {
//     students: state.students,
//     campuses: state.campuses
//   }
// }
// const CampusListContainer = connect(mapStateToProps)(CampusList);
// export default CampusListContainer;


// export default class CampusList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campuses: []
//         }
//     }

//     componentDidMount () {
//         axios.get('/api/campuses')
//         .then(res => res.data)
//         .then(campuses => {
//             this.setState({ campuses })
//         })
//     }
