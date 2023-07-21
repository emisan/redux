import { legacy_createStore } from 'redux';
import calculatorReducers from './index.js';

export default function configureStore() {
    return legacy_createStore(calculatorReducers);
}