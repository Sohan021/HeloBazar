import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducttypes } from '../../../../actions/Regular/productTypeActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AgentFirstScreen(props) {

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
                            <div className="row">
                                <div className="col-3">

                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        {productTypes.map((ptype) => (
                                            <div className="col-6">
                                                <Card key={ptype.id} style={{ color: "#fff", backgroundColor: "#000", borderColor: "#000" }} >
                                                    <Card.Body>

                                                        <Card.Title style={{
                                                            textAlign: 'center',
                                                            justifyContent: "center",

                                                        }}>
                                                            <Link to={'/agentcategories/' + ptype.id} style={{ textAlign: 'center', justifyContent: "center",
                                                            }}>
                                                                <Card style={{ height: "70px", justifyContent: "center", color: "#000" }}><b>{ptype.name}</b></Card>
                                                            </Link>
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                                <br />
                                                <br />
                                            </div>
                                        ))}
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
export default AgentFirstScreen;
