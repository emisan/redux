import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fiveClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorFiveKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(fiveClickedPayload())}}>5</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(fiveClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorFiveKey);