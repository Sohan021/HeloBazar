import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SignOut } from "../../actions/Auth/signInActions";

const NavbarComponent = ({ toggleSidebar, props }) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const dispatch = useDispatch();


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(SignOut());
    }
    return (
        <Navbar
            color="#fff"
            style={{ backgroundColor: "#fff", height: "60px" }}
            light
            className="navbar"
            expand="md"
            fixed="top"
        >
            <Button color="dark" onClick={toggleSidebar}>
                <FontAwesomeIcon color="#fff" icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>

                {userInfo ? (
                    <Nav className="ml-auto" navbar>
                        {/* <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius: 10,
                            width: "140px",
                            textAlign: "center"
                        }} href="/fundsharerforsharer" ><h5><b>Fund</b></h5></NavLink> */}
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            width: "10px",
                            textAlign: "center"
                        }}></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius: 10,
                            width: "140px",
                            textAlign: "center"
                        }} href="/paymentproducttypes" ><h5><b>Make Payment</b></h5></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            width: "10px",
                            textAlign: "center"
                        }}></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius: 10,
                            width: "130px",
                            textAlign: "center"
                        }} href="/paymentproducttypes" ><h5><b>Find Agent</b></h5></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            width: "40px",
                            textAlign: "center"
                        }}></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius: 10,
                            width: "250px",
                            textAlign: "center"
                        }} href="/appsharerprofiledetails" ><h5><b>{userInfo.item1.phoneNumber}</b></h5></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            width: "10px",
                            textAlign: "center"
                        }}></NavLink>
                        <NavLink style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius: 10,
                            width: "100px",
                            textAlign: "center"
                        }} href="/signin"
                            onClick={handleLogout}><h5><b>Log Out</b></h5></NavLink>

                    </Nav>
                ) : (
                        <Nav className="ml-auto" navbar>
                            <NavLink style={{
                                color: "#fff",
                                backgroundColor: "#000",
                                borderRadius: 10,
                                width: "100px",
                                textAlign: "center",

                            }} href="/signin" ><h5>SignIn</h5></NavLink>

                        </Nav>
                    )}

            </Collapse>
        </Navbar >
    );

};

export default NavbarComponent;


