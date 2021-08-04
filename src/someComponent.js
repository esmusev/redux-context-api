import {Component} from "react";
import connect from "./context-store/connect";
import Store from "./context-store/Store";

class SomeComponent extends Component{
    handleOnClick = event => {
        this.props.dataAdd();
    }
    handleReset = event => {
        this.props.dataReset()
    }
    render(){
        return (
        <div>
            <h1>Class component</h1>
            <button onClick={this.handleOnClick}>
                ADD +1
            </button>
            <button onClick={this.handleReset}>
                RESET
            </button>
            <Store.Consumer>
                {(state) => {
                    return (
                        <div>
                            <p>data from context consumer:</p>
                            <h2>{state.state.data} </h2>
                        </div>
                    )

                }}
            </Store.Consumer>
            <p>This is data from mapStateToProps:</p>
            <h1>{this.props.data}</h1>
        </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    data: state.data
});

const mapDispatchToProps = dispatch => ({
    dataAdd: () => dispatch({ type: "ADD_COUNTER", payload: "324" }),
    dataReset: () => dispatch({ type: "RESET_COUNTER", payload: "reset" })
});


export default connect(mapStateToProps, mapDispatchToProps)(SomeComponent);
