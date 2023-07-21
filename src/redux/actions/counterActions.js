import * as actionTypes from './actionTypes';

// bind the action type command names to a function so that the type can be requested in counterReducer switch-statement: action.type to case
export const increaseCounter = () => ({
    type:actionTypes.INCREASE_COUNTER,
    payload:1 // the value to increase by when this function will be called
})

export const decreaseCounter = () => ({
    type:actionTypes.DECREASE_COUNTER,
    payload:1 // the value to decrease by when this function will be called
})

export const increaseCounterByTwo = () => ({
    type:actionTypes.INCREASE_COUNTER_BY_TWO,
    payload:2 // the value to increase by when this function will be called
})

export const resetCounter = () => ({
    type:actionTypes.RESET_COUNTER,
    payload:0 // the value to increase by when this function will be called
})