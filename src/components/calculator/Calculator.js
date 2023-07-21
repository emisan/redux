import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorOneKey from './CalculatorOneKey';
import CalculatorTwoKey from './CalculatorTwoKey';
import CalculatorThreeKey from './CalculatorThreeKey';
import CalculatorFourKey from './CalculatorFourKey';
import CalculatorFiveKey from './CalculatorFiveKey';
import CalculatorSixKey from './CalculatorSixKey';
import CalculatorSevenKey from './CalculatorSevenKey';
import CalculatorEightKey from './CalculatorEightKey';
import CalculatorNineKey from './CalculatorNineKey';
import CalculatorZeroKey from './CalculatorZeroKey';
import CalculatorPlusKey from './CalculatorPlusKey';

class Calculator extends Component {
    render() {
        return (
            <Container className="d-grid">
                <Row>
                    <Col><h1>THE CALCULATOOOOR</h1></Col>
                    <Col><CalculatorDisplay /></Col>
                </Row>
                <Row xs="3">
                    <Col><CalculatorOneKey /></Col>
                    <Col><CalculatorTwoKey /></Col>
                    <Col><CalculatorThreeKey /></Col>
                </Row>
                <Row>
                    <Col><CalculatorFourKey /></Col>
                    <Col><CalculatorFiveKey /></Col>
                    <Col><CalculatorSixKey /></Col>
                </Row>
                <Row>
                    <Col><CalculatorSevenKey /></Col>
                    <Col><CalculatorEightKey /></Col>
                    <Col><CalculatorNineKey /></Col>
                </Row>
                <Row>
                    <Col><CalculatorZeroKey /></Col>
                    <Col><CalculatorPlusKey /></Col>
                </Row>
            </Container>
        );
    }
}

export default Calculator;