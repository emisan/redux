import * as calculatorKeyActions from '../actions/calculator/calculatorKeyActions';

const calculatorDisplayReducer = (display = "", action) => {
    let newDisplay = display;
    switch (action.type) {
        case calculatorKeyActions.ONE_CLICKED:
        case calculatorKeyActions.TWO_CLICKED:
        case calculatorKeyActions.THREE_CLICKED:
        case calculatorKeyActions.FOUR_CLICKED:
        case calculatorKeyActions.FIVE_CLICKED:
        case calculatorKeyActions.SIX_CLICKED:
        case calculatorKeyActions.SEVEN_CLICKED:
        case calculatorKeyActions.EIGHT_CLICKED:
        case calculatorKeyActions.NINE_CLICKED:
        case calculatorKeyActions.ZERO_CLICKED:
            newDisplay = display + action.payload;
            break;
        case calculatorKeyActions.MINUS_CLICKED:
            newDisplay = newDisplay - action.payload;
            break;
        case calculatorKeyActions.PLUS_CLICKED:
            newDisplay = newDisplay + action.payload;
            break;
        case calculatorKeyActions.MULTIP_CLICKED:
            newDisplay = newDisplay * action.payload;
            break;
        case calculatorKeyActions.DIVIDE_CLICKED:
            newDisplay = newDisplay / action.payload;
            break;
        default: break;
    }
    return newDisplay;
}

export default calculatorDisplayReducer;