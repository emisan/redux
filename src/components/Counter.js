import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <Label>Redux: Digit counter </Label>
                <Input value={this.props.counter}/>
            </div>
        );
    }
}

function mapCounterStateToProps(state) {
    //define a property counter which is mapped to the state parameter of counterReducer-function in counterReducer.js
    // actual state is 0 in this function, so that the Input value will be 0
    // changing the state=0 to state=10 in counterReducer-funct would show the value 10 in Label-value then
    // this is POC to redux store usage!
    return {counter:state.counterReducer};
}

export default connect(mapCounterStateToProps)(Counter);