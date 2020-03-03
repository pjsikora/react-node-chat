import { ADD_MSG, AUTH, RECEIVED_MSG } from '../actions/actionTypes';
import io from 'socket.io-client';
import {dispatch} from 'react-redux'

let socket = null;

export default function ({ dispatch }) {
    
    return next => action => {
        // const dispatch = useDispatch();

        if(action.type == AUTH) {
            socket = io.connect(`http://localhost:3210`);
            socket.on('msgReceived', data => {
                console.log('message received', data)
               dispatch({type: RECEIVED_MSG, payload: data});
            });
        }

        else if(action.type == ADD_MSG && socket) {

            console.log('mid', action)
            socket.emit('addChatMsg', action.payload);
            return next(action)
        } else {
            return next(action)
        }
    }
}