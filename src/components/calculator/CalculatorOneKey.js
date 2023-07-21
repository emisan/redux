import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {oneClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorOneKey extends Component {
    render() {
        return (
            <div>
                <Button onClick={e => {this.props.dispatch(oneClickedPayload())}}>1</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(oneClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorOneKey);