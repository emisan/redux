import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {increaseCounterByTwo} from '../redux/actions/counterActions';

class IncreaseCounterByTwo extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {this.props.dispatch(increaseCounterByTwo())}}>+2</button>
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(increaseCounterByTwo, dispatch)}
}
export default connect(mapPropsToDispatch)(IncreaseCounterByTwo);