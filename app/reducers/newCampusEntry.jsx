import axios from 'axios'

// Action Types

WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME'

// Action Creators

export function writeCampusName (campus) {
    const action = {
        type: WRITE_CAMPUS_NAME,
        campus
    }
    return action;
}

// Thunk Creators
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
export default function newCampusEntryReducer (prevState=[], action) {
    switch (action.type) {
        case:

        case:

        default:

    }
}
