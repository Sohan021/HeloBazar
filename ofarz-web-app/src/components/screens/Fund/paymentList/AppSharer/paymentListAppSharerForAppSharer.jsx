import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentsAppSharer } from '../../../../../actions/Fund/paymentActions';
import { Card } from 'react-bootstrap'
import { Button } from 'reactstrap';

const PaymentListAppSharerForAppSharerScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const paymentListAppSharer = useSelector((state) => state.paymentListAppSharer)
    const { payments } = paymentListAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentsAppSharer(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    return (
        <div className="container" style={{ width: "976px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}>
            <br />
            <br />
            <br />
            <br />
            {payments ? (


                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        {payments.map((payment) => (
                            <Card>
                                <div>
                                    <Card key={payment.id} style={{
                                        color: "#fff",
                                        backgroundColor: "#fff",
                                        borderColor: "#000"
                                    }} >
                                        <Card.Body style={{ alignItems: "center", justifyContent: "center" }}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Card style={{ padding: "10px", borderColor: "#000" }}>
                                                                <h5 style={{ color: "#000" }}>Agent PhoneNumber:-{payment.agentPhnNumber}</h5>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Card style={{ padding: "10px", borderColor: "#000" }}>
                                                                <h5 style={{ color: "#000" }}>Payment Time:-{payment.paymentTime}</h5>
                                                            </Card>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Card style={{ padding: "10px", borderColor: "#000" }}>
                                                                <h5 style={{ color: "#000" }}>Amount:-{payment.amount}</h5>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Card style={{ padding: "10px", borderColor: "#000" }}>
                                                                <h5 style={{ color: "#000" }}>Payment Type:-{payment.paymentType.paymentTypeName}</h5>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="col-2">

                    </div>
                </div>


            ) : (
                    <h1></h1>
                )
            }
        </div >
    );
};

export default PaymentListAppSharerForAppSharerScreen;
