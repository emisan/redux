import * as calcKeyActions from './calculatorKeyActions';

export const oneClickedPayload = () => ({
    type:calcKeyActions.ONE_CLICKED, 
    payload:1
});

export const twoClickedPayload = () => ({
    type:calcKeyActions.TWO_CLICKED,
    payload:2
});

export const threeClickedPayload = () => ({
    type:calcKeyActions.THREE_CLICKED,
    payload:3
});

export const fourClickedPayload = () => ({
   type:calcKeyActions.FOUR_CLICKED,
   payload:4
});

export const fiveClickedPayload = () => ({
    type:calcKeyActions.FIVE_CLICKED,
    payload:5
 });

 export const sixClickedPayload = () => ({
    type:calcKeyActions.SIX_CLICKED,
    payload:6
 });

 export const sevenClickedPayload = () => ({
    type:calcKeyActions.SEVEN_CLICKED,
    payload:7
 });

 export const eightClickedPayload = () => ({
    type:calcKeyActions.EIGHT_CLICKED,
    payload:8
 });

 export const nineClickedPayload = () => ({
    type:calcKeyActions.NINE_CLICKED,
    payload:9
 });

 export const zeroClickedPayload = () => ({
    type:calcKeyActions.ZERO_CLICKED,
    payload:0
 });

 export const multipClickedPayload = (a, b) => ({
    type:calcKeyActions.MULTIP_CLICKED,
    payload: (a*b)
 });

 export const divideClickedPayload = (a, b) => ({
    type:calcKeyActions.DIVIDE_CLICKED,
    payload:(a/b)
 });

 export const plusClickedPayload = (a, b) => ({
    type:calcKeyActions.PLUS_CLICKED,
    payload: (a+b)
 });

 export const minusClickedPayload = (a, b) => ({
    type:calcKeyActions.MINUS_CLICKED,
    payload: (a-b)
 });

 export const modulusClickedPayload = (a, b) => ({
    type:calcKeyActions.MODULUS_CLICKED,
    payload: (a%b)
 });