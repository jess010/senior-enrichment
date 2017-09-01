import axios from 'axios'

// Action Types

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const UPDATE_NAME_ON_STUDENT = 'UPDATE_NAME_ON_STUDENT';
const UPDATE_CAMPUS_ON_STUDENT = 'UPDATE_CAMPUS_ON_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT'

// Action Creators

export function getStudents (students) {
    const action = {
        type: GET_STUDENTS,
        students
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

export function updateNameOnStudent (name) {
  const action = { type: UPDATE_NAME_ON_STUDENT, name };
  return action;
}

export function updateCampusOnStudent (campusId) {
  const action = { type: UPDATE_CAMPUS_ON_STUDENT, campusId };
  return action;
}

export function deleteStudent (studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

// Thunk Creators
export function fetchStudents () {
    return function thunk (dispatch) {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students)
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

export function putStudentCampus (newStudentCampus, studentId) {
    return function thunk (dispatch) {
        const studentUrl = '/api/students/' + studentId
        return axios.put(studentUrl, newStudentCampus)
        .then(res => res.data)
        .then(updatedStudent => {
            const action = updateCampusOnStudent(updatedStudent);
            dispatch(action);
        });
    }
}

export function deleteStudentRecord (student, studentId) {
    return function thunk (dispatch) {
        const studentUrl = '/api/students/' + studentId
        return axios.delete(studentUrl)
        .then(res => res.data)
        .then(deletedStudent => {
            const action = deleteStudent(deletedStudent)
            dispatch(action)
        })
        .then(() => res.status(204).redirect('/students/'))
    }
}



// Reducer
export default function studentsReducer (prevState = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
          return action.students
        case GET_STUDENT:
          return [...prevState, action.student]
        case UPDATE_NAME_ON_STUDENT:
            return action.name;  // TODO: Skeleton only, fill out in 'update student feature'
        case UPDATE_CAMPUS_ON_STUDENT:
            return action.campusId; // TODO: Skeleton only, fill out in 'update student feature'
        case DELETE_STUDENT:
            return [prevState].filter(student => studentId !== student.id);
        default:
          return prevState
    }
}
