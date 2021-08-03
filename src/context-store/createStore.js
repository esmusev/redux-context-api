const createStore = (reducer, initialState) => {
    let state = initialState;
    return {
        dispatch: action => { state = reducer(state, action) },
        state: () => state,
    }
}
export default createStore;
