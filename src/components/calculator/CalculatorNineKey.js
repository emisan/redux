import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {nineClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorNineKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(nineClickedPayload())}}>9</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(nineClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorNineKey);