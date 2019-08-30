import {ADD_AGE, SET_NAME} from "../actions";

function reducer1(state = { name: "mike", age: 22 }, action) {
  switch (action.type) {
    case SET_NAME:
      return  {
        ...state,
        name: action.user.name
      };
    case ADD_AGE:
      return {
        ...state,
        age: state.age + action.user.n
      };
    default: return state;
  }
}

export default reducer1;
