import { combineReducers } from 'redux'
import campuses from './campuses.jsx'
import students from './students.jsx'
// import store from '../store.jsx'

// const initialState = store.getState()

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers({
    campuses,
    students
})


export default rootReducer
