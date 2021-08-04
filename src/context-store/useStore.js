import {useState, useCallback} from "react";

const useStore = (reducer, initialState) => {

    const [state, setState] = useState(initialState)

    const dispatch = useCallback(
        (action) => {
            setState(prev =>  reducer(prev, action));
            return action;
        },
        [reducer],
    );

    return {
        dispatch,
        state,
    }
}

export default useStore;
