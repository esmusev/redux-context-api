import {useState} from "react";

const useStore = (reducer, initialState) => {

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

export default useStore;
