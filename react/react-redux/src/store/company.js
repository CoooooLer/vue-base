import {ADD_AGE, SET_NAME} from "../actions";

function reducer2(state = { name: "zhangsan", age: 33 }, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.company.name
      };
    case ADD_AGE:
      return {
        ...state,
        age: state.age + action.company.n
      }
    default: return state;
  }
}

export default reducer2;
