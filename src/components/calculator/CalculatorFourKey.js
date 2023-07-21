import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fourClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorFourKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(fourClickedPayload())}}>4</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(fourClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorFourKey);