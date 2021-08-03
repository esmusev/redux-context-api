import {ADD_COUNTER, RESET_COUNTER} from "../actions/actionTypes";

export const initialState = {
    data: 1,
};

function someReducer (state, action){
    switch (action.type){
        case ADD_COUNTER:
            console.log(state)
            return {...state, data: state.data+1
            };
        case RESET_COUNTER:
            return initialState;
        default:
            return state;
    }
}

export default someReducer;
