import React, { useEffect } from 'react';
import { Button, } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { appSharerFirstDownlineList } from '../../../../actions/Auth/appSharerActions';



const ThirdDownlineListForAppSharerScreen = (props) => {

    const id = props.match.params.id;

    const appSharersGetFirstDownlineList = useSelector((state) => state.appSharerGetFirstDownlineList)
    const { downlines } = appSharersGetFirstDownlineList;

    const dispatch = useDispatch();

    useEffect(() => {


        dispatch(appSharerFirstDownlineList(id))

        return () => {
            //
        };
    }, [id]);


    const handleProfileDetails = (id) => {
        props.history.push('/appsharerdownlineprofiledetails/' + id);
    }

    return (
        <>
            <div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <br />
                <br />
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Card style={{ height: "50px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#000" }}>
                                Third Level
                            </Card>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <br />
                <br />
                {downlines ? (
                    <Card>
                        <div className="row">
                            {downlines.map((downline) => (
                                <div className="col-4">
                                    <Card style={{ color: "#000", backgroundColor: "#fff", borderColor: "#000" }} height="200px">
                                        <div className="row">
                                            <div className="container">
                                                <Card.Img variant="top" width="160px" height="200px" src={downline.profilePhoto} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Card >
                                                 
                                                        <ListGroup className="list-group-flush">
                                                           
                                                            <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {downline.firstName}  {downline.phoneNumber}</h4></ListGroupItem>
                                                        </ListGroup>
                                                   
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Card>
                                                  
                                                        <Button
                                                            style={{
                                                            color: "#fff",
                                                            backgroundColor:"#000"
                                                        }}
                                                            outline color="info" size="lg" block type="submit"
                                                            onClick={() => handleProfileDetails(downline.id)}
                                                        >
                                                            Profile
                                                        </Button>
                                                    
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Card>
                                                    
                                                        <Link to={"appsharerfourthownlinelist/" + downline.id}>
                                                            <Button
                                                            style={{
                                                                color: "#fff",
                                                                backgroundColor: "#000"
                                                            }}
                                                                outline color="success" size="lg" block type="submit"
                                                            >
                                                                Downlines
                                                        </Button>
                                                        </Link>
                                                    
                                                </Card>
                                            </div>
                                        </div>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </Card>


                ) : (
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <Card style={{ height: "50px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#000" }}>
                                        Your Third Level Still Empty
                                    </Card>
                                </div>
                                <div className="col-4"></div>
                            </div> */}
                        </div>
                    )}
            </div>
        </>

    );
};

export default ThirdDownlineListForAppSharerScreen;
