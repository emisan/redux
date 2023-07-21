import React, { Component } from 'react';
import {Label, Input} from 'reactstrap';
import { connect } from 'react-redux';

class CalculatorDisplay extends Component {
    render() {
        return (
            <div style={{marginBottom:'5px'}}>
                <Label>Display</Label>
                <Input style={{marginLeft:'5px'}} value={this.props.display}/>
            </div>
        );
    }
}

function mapPropsToDispatch(state) {
    //define a property counter which is mapped to the state parameter of counterReducer-function in counterReducer.js
    // actual state is 0 in this function, so that the Input value will be 0
    // changing the state=0 to state=10 in counterReducer-funct would show the value 10 in Label-value then
    // this is POC to redux store usage!
    return {display:state.calculatorDisplayReducer};
}

export default connect(mapPropsToDispatch)(CalculatorDisplay);