import reducer, {initialState} from "../reducers/someReducer";
import useStore from "./useStore";
import Store from "./Store";

const Provider = ({ children }) => {
    const store = useStore(reducer, initialState);
    return <Store.Provider value={store}>{children}</Store.Provider>;
};

export default  Provider;
