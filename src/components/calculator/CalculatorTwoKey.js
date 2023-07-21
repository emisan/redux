import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {twoClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorTwoKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(twoClickedPayload())}}>2</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(twoClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorTwoKey);