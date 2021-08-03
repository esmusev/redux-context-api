import {useContext} from "react";
import Store from "./Store"

const connect = (
    mapStateToProps = () => {},
    mapDispatchToProps = () => {
    }) => (
        WrappedComponent
) => {
    return props => {
        const {dispatch, state} = useContext(Store);
        return (
            <WrappedComponent
                dispatch={dispatch}
                {...mapStateToProps(state, props)}
                {...mapDispatchToProps(dispatch)}
            />
        );
    };
}

export default connect;
