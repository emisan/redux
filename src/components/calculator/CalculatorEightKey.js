import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {eightClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorEightKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(eightClickedPayload())}}>8</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(eightClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorEightKey);