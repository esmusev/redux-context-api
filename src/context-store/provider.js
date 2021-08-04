import reducer, {initialState} from "../reducers/someReducer";
import createStore from "./createStore";
import Store from "./Store";

const Provider = ({ children }) => {
    const store = createStore(reducer, initialState);
    return <Store.Provider value={store}>{children}</Store.Provider>;
};

export default  Provider;
