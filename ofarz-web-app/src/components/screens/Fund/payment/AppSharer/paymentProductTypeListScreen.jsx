import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducttypes } from '../../../../../actions/Regular/productTypeActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function PaymentProductTypeScreen(props) {

    const productTypeList = useSelector((state) => state.productTypeList);
    const { productTypes, loading, error } = productTypeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducttypes());

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
                        <div className="container" style={{ justifyContent: "center", alignContent:"center" }}>
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
                                <div className="col-3">

                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <Card style={{ color: "#000", backgroundColor: "#000", borderColor: "##000" }} >
                                                <Card.Body>
                                                    <Link to={'/paymentofferproduct'} style={{
                                                        textAlign: 'center', justifyContent: "center",
                                                    }}>
                                                        <Card style={{ height: "60px", backgroundColor: "##000", justifyContent: "center", color: "#000" }}><h3>Offer</h3></Card>
                                                    </Link>

                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-6">
                                            <Card style={{ color: "#000", backgroundColor: "#000", borderColor: "##000" }} >
                                                <Card.Body>
                                                    <Link to={'/paymentpromotionalproduct/'} style={{
                                                        textAlign: 'center', justifyContent: "center",
                                                    }}>
                                                        <Card style={{ height: "60px", backgroundColor: "##000", justifyContent: "center", color: "#000" }}><h3>Promotional</h3></Card>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </div>



                                    </div>

                                </div>
                                <div className="col-3">

                                </div>

                            </div>
                        </div>
                    )}
        </>
    );
}
export default PaymentProductTypeScreen;
