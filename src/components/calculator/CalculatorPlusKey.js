import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { plusClickedPayload } from '../../redux/actions/calculator/calculatorActions';

class CalculatorPlusKey extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.dispatch(plusClickedPayload())}>+</Button>
            </div>
        );
    }
}

function mapPropsToState(dispatch) {
    return {actions:bindActionCreators(plusClickedPayload, dispatch)};
}

export default connect(mapPropsToState) (CalculatorPlusKey);