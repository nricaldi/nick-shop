// a reducer is a function that gets two props
// a state object that represents the current/inital state
// and an action object that consists of a string and an optional payload
const INITIAL_STATE = {
    currentUser: null
}



const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default: 
      return state;
  }
}

export default userReducer;