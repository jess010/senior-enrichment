import { combineReducers } from 'redux'
import campuses from './campuses.jsx'
import students from './students.jsx'

// const initialState = {}

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
