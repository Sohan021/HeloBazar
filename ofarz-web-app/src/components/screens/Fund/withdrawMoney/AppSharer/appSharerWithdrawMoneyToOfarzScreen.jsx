import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'reactstrap';
import { fundAppSharers } from '../../../../../actions/Fund/fundActions';
import { withdrawAppSharerToOfarz } from '../../../../../actions/Fund/withdrawActions';
import { Card } from 'react-bootstrap'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function WithdrawMoneyAppSharerToOfarz(props) {

    const [amount, setAmount] = useState('');
    const [ofarzPhnNumber, setOfarzPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const fundAppSharer = useSelector((state) => state.fundAppSharer);
    const { fund } = fundAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAppSharers(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const sharerId = userInfo.item1.id;

        dispatch(withdrawAppSharerToOfarz(amount, ofarzPhnNumber, sharerId));


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
                                        Cash Out To HeloBazar
                                    </Card>
                                    <br />
                                    <br />
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#000" }}>
                                        Main Account Balance: {fund.mainAccount}
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
                                                    Ofarz PhoneNumber
                                                </Label>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Ofarz Phone Number"
                                                    size="lg"
                                                    value={ofarzPhnNumber}
                                                    onChange={(e) => setOfarzPhnNumber(e.target.value)}
                                                />
                                            </FormGroup>
                                        </div>
                                        {fund.mainAccount >= amount ? (
                                            <Button
                                                style={{
                                                    color: "#fff",
                                                    backgroundColor: "#000"
                                                }}
                                                outline color="success" size="lg" block type="submit">
                                                Cash Out
                                            </Button>
                                        ) : (
                                                <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#d9534f" }}>
                                                    You Do Not Have Enough Money
                                                </Card>
                                            )}

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
        </>
    )
}
export default WithdrawMoneyAppSharerToOfarz;