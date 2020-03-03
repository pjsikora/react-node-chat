import { 
  ADD_MSG, 
  AUTH 
} from "./actionTypes";

export const addMsg = (payload) => {
  return {
    type: ADD_MSG,
    payload
  };
};

export const auth = (payload) => {
  console.log('payload', payload)
  return {
    type: AUTH,
    payload
  };
};