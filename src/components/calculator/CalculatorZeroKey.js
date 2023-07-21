import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {zeroClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorZeroKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(zeroClickedPayload())}}>0</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(zeroClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorZeroKey);