import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitPaymentTableCashOffer } from '../../../../../../../actions/Fund/paymentActions';
import { fundAppSharers } from '../../../../../../../actions/Fund/fundActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';

function PaymentTableCashOffer(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const payerId = userInfo.item1.id;
        dispatch(submitPaymentTableCashOffer(amount, agentPhnNumber, payerId));

    }
    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <Card style={{ padding: "10px", borderColor: "#000" }}>
                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#000" }}>
                                        Table Cash -- Offer Product
                                    </Card>
                                    <br />
                                    <br />
                                    <Form
                                        onSubmit={submitHandler}
                                    >
                                        <div
                                            style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                                        >
                                            <FormGroup >
                                                <Label
                                                    for="name"
                                                    style={{ color: "#000" }}
                                                >
                                                    Amount
                                                </Label>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Amount"
                                                    size="lg"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup >
                                                <Label
                                                    for="password"
                                                    style={{ color: "#000" }}
                                                >
                                                    Agent PhoneNumber
                                                </Label>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Agent Phone Number"
                                                    size="lg"
                                                    value={agentPhnNumber}
                                                    onChange={(e) => setAgentPhnNumber(e.target.value)}
                                                />
                                            </FormGroup>
                                        </div>
                                        <Button
                                            style={{
                                                color: "#fff",
                                                backgroundColor: "#000"
                                            }}
                                            outline color="success" size="lg" block type="submit">
                                            Payment
                                        </Button>
                                    </Form>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>)
}
export default PaymentTableCashOffer;