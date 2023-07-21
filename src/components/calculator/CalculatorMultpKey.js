import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {multipKeyResult} from '../../redux/actions/calculator/calculatorActions';

class CalculatorMultipKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(multipKeyResult())}}>*</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(multipKeyResult, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorKey);