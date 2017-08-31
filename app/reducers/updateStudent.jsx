// DESTROY THIS ---- put state back in component with form
// Refer to Redux Todo tutorial

import axios from 'axios';

// Action Types
const UPDATE_NAME_ON_STUDENT = 'UPDATE_NAME_ON_STUDENT';
const UPDATE_CAMPUS_ON_STUDENT = 'UPDATE_CAMPUS_ON_STUDENT';

// Action Creators
export function updateNameOnStudent (name) {
  const action = { type: UPDATE_NAME_ON_STUDENT, name };
  return action;
}

export function updateCampusOnStudent (campusId) {
  const action = { type: UPDATE_CAMPUS_ON_STUDENT, campusId };
  return action;
}

// Thunk Creators
export function putStudentName (newStudentName, studentId) {
    return function thunk (dispatch) {
        const studentUrl = '/api/students/' + studentId
        return axios.put(studentUrl, newStudentName)
        .then(res => res.data)
        .then(updatedStudent => {
            const action = updateNameOnStudent(updatedStudent);
            dispatch(action);
        });
    }
}

export function putStudentCampus (newStudentCampus) {
    return function thunk (dispatch) {
        return axios.put('/api/students/:id', newStudentCampus)
        .then(res => res.data)
        .then(updatedStudent => {
            const action = updateCampusOnStudent(updatedStudent);
            dispatch(action);
        });
    }
}


export default function updateStudentReducer (prevState = {name: '', campusId: ''}, action) {
    switch (action.type) {
        case UPDATE_NAME_ON_STUDENT:
            return action.name;
        case UPDATE_CAMPUS_ON_STUDENT:
            return action.campusId;
        default:
            return prevState;
    }
}

