import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentTypes } from '../../../../../actions/Fund/paymentTypeActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function PaymentOfferProduct(props) {


    const paymentTypeList = useSelector((state) => state.paymentTypeList);
    const { paymentTypes, loading, error } = paymentTypeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentTypes());
        return () => {
            //
        };
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
 

                        <div className="container">
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
                                    <div className="row">
                                        <div className="col-4">
                                            <Card style={{ color: "#000", backgroundColor: "#000", borderColor: "#fff" }} >
                                                <Card.Body>
                                                        <Link to={'/submitpaymenttablecashoffer'} style={{
                                                            textAlign: 'center', justifyContent: "center",
                                                        }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#fff", justifyContent: "center", color: "#000" }}><b>Table Cash (Offer)</b></Card>
                                                        </Link>
                                                
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-4">
                                            <Card style={{ color: "#000", backgroundColor: "#000", borderColor: "#fff" }} >
                                                <Card.Body>
                                                        <Link to={'/submitpaymentmainaccountoffer'} style={{
                                                            textAlign: 'center', justifyContent: "center",
                                                        }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#fff", justifyContent: "center", color: "#000" }}><b>Main Account (Offer)</b></Card>
                                                        </Link>
                                             
                                                </Card.Body>
                                            </Card>
                                        </div>

                                        <div className="col-4">
                                            <Card style={{ color: "#000", backgroundColor: "#000", borderColor: "#fff" }} >
                                                <Card.Body>
                                                        <Link to={'/submitpaymentbackshoppingoffer'} style={{
                                                            textAlign: 'center', justifyContent: "center",
                                                        }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#fff", justifyContent: "center", color: "#000" }}><b>Back Shoping (Offer)</b></Card>
                                                        </Link>
                                                
                                                </Card.Body>
                                            </Card>
                                        </div>



                                    </div>

                                </div>
                                <div className="col-2">

                                </div>

                            </div>
                        </div>
                    )}
        </>
    );
}
export default PaymentOfferProduct;
