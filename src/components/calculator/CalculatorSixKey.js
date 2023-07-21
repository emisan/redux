import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {sixClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorSixKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(sixClickedPayload())}}>6</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(sixClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorSixKey);