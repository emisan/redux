import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { increaseCounter } from '../redux/actions/counterActions';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {this.props.dispatch(increaseCounter())}}>+</button>
            </div>
        );
    }
}

// action binding
function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(increaseCounter, dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseCounter);