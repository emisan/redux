import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {threeClickedPayload} from '../../redux/actions/calculator/calculatorActions';

class CalculatorThreeKey extends Component {
    render() {
        return (
            <div>
               <Button onClick={e => {this.props.dispatch(threeClickedPayload())}}>3</Button> 
            </div>
        );
    }
}

function mapPropsToDispatch(dispatch) {
    return {actions:bindActionCreators(threeClickedPayload, dispatch)};
}

export default connect(mapPropsToDispatch)(CalculatorThreeKey);