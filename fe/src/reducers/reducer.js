import {ADD_MSG, AUTH, RECEIVED_MSG} from '../actions/actionTypes'

const initialState = {
  msgs: [], 
  user: ''
}
const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
      case ADD_MSG:

        return {
          ...state,
          msgs: [
            ...state.msgs,
            {
              msg: payload.msg,
              from: payload.from
            }
          ]
        };
      case "LOGIN":

        return {
          ...state,
          user: payload.name
        };
      case RECEIVED_MSG:

        return {
          ...state,
          msgs: [
            ...state.msgs,
            {
              msg: payload.msg,
              from: payload.from
            }
          ]
        };
      default:
        return state
    }
  }
  export default reducer