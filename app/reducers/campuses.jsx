import axios from 'axios'

// Action Types
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'

// Action Creators
export function getCampuses (campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    }
    return action
}

export function getCampus (campus) {
    const action = {
        type: GET_CAMPUS,
        campus
    }
    return action
}

// Thunk Creators
export function fetchCampuses () {
    return function thunk (dispatch) {
        return axios.get('api/campuses')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses)
            dispatch(action)
        })
    }
}

export function postCampus (campus) {
    return function thunk (dispatch) {
        return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampus(newCampus);
            dispatch(action);
        });
    }
}

// Reducer
export default function campusesReducer (prevState = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
          return action.campuses

        case GET_CAMPUS:
          return [...prevState, action.campus]

        default:
          return prevState
    }
}
