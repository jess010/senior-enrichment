import axios from 'axios'

// Action Types

GET_CAMPUSES = 'GET_CAMPUSES'
GET_CAMPUS = 'GET_CAMPUS'

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
