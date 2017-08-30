import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios'

// Initial state

const initialState = {
    campuses: [],
    students: []
}

// Action Types
GET_CAMPUSES = 'GET_CAMPUSES'
GET_STUDENTS = 'GET_STUDENTS'
GET_CAMPUS = 'GET_CAMPUS'
GET_STUDENT = 'GET_STUDENT'
WRITE_STUDENT = 'WRITE_STUDENT'
WRITE_CAMPUS = 'WRITE_CAMPUS'


// Action Creators
export function getCampuses (campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    }
    return action
}

export function getStudents (students) {
    const action = {
        type: GET_STUDENTS,
        students
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

export function getStudent (student) {
    const action = {
        type: GET_STUDENT,
        student
    }
    return action
}

export function writeStudent (student) {
    const action = {
        type: WRITE_STUDENT,
        student
    }
    return action;
}

export function writeCampus (campus) {
    const action = {
        type: WRITE_CAMPUS,
        campus
    }
    return action;
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

export function fetchStudents () {
    return function thunk (dispatch) {
        return axios.get('api/students')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses)
            dispatch(action)
        })
    }
}

export function postStudent (student) {
    return function thunk (dispatch) {
        return axios.post('/api/students', student)
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudent(newStudent);
            dispatch(action);
        });
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

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

