import {useState} from "react";

const createStore = (reducer, initialState) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialState)

    const dispatch = action => {
        setState( reducer(state, action));
        return action
    }

    return {
        dispatch,
        state,
    }
}

export default createStore;
