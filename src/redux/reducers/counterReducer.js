import * as actionTypes from '../actions/actionTypes';

const counterReducer = (state=0, action) => {
    let newState = state;
    // important, you need to get the bound type to the action, telling only "action" instead "action.type" will not case the bound type of action!
    switch(action.type) { 
        case actionTypes.INCREASE_COUNTER:
            newState = state + action.payload;
            break;
        case actionTypes.DECREASE_COUNTER:
            newState = state - action.payload;
            break;
        case actionTypes.INCREASE_COUNTER_BY_TWO:
            newState = state + action.payload;
            break;
        case actionTypes.RESET_COUNTER:
            newState = action.payload;
            break;
        default:
            break;
    }
    return newState;
}
export default counterReducer;