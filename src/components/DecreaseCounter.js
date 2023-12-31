import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decreaseCounter } from '../redux/actions/counterActions';
class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {this.props.dispatch(decreaseCounter())}}>-</button>
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(decreaseCounter, dispatch)}
}
export default connect(mapPropsToDispatch)(DecreaseCounter);