import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {sevenClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorSevenKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(sevenClickedPayload())}}>7</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(sevenClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorSevenKey);