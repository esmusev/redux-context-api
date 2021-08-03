import reducer, {initialState} from "../reducers/someReducer";
//import createStore from "./createStore";
import Store from "./Store";
import {useReducer} from "react";

const createStore = (reducer, initialState) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("state", state)
    console.log("dispatch:", dispatch)

    return { state, dispatch };
};

const Provider = ({ children }) => {
    const store = createStore(reducer, initialState);
    return <Store.Provider value={store}>{children}</Store.Provider>;
};

export default  Provider;
