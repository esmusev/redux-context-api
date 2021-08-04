import {useContext} from "react";
import Store from "./Store";

const useSelector = (selector) => {
    const {state} = useContext(Store);
    let selectedState = selector(state);

    return selectedState
}

export default useSelector;
