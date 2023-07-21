import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetCounter } from '../redux/actions/counterActions';

class ResetCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {this.props.dispatch(resetCounter())}}>Reset</button>
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(resetCounter, dispatch)}
}
export default connect(mapPropsToDispatch)(ResetCounter);