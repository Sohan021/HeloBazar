import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { fundAgent } from '../../../../../actions/Fund/fundActions';

const FundAgentForAgentscreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const fundd = useSelector((state) => state.fundAgent)
    const { fund } = fundd;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAgent(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



    return (

        <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">

                <div className="col-2">

                </div>
                <div className="col-8">
                    {fund ? (
                        <Card style={{ borderColor: "#000" }}>
                            <div className="row">
                                <div className="col-12">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#000" }}>
                                        Fund:- {userInfo.item1.phoneNumber}<b></b>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>Shoper Transection</b>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>Direct Cash Transection</b>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>Main Account</b>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>Total Transection</b>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>{fund.shoperTransection}</b>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>{fund.sellViaDirectCash}</b>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>{fund.mainAccount}</b>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#000", borderColor: "#000" }}>
                                        <b>{fund.totalTransection}</b>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                    ) : (
                            <h1></h1>
                        )
                    }
                </div>
                <div className="col-2">

                </div>
            </div>
        </div >
    );
};

export default FundAgentForAgentscreen