import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn } from '../../../../actions/Auth/signInActions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';



function SigninScreen(props) {


    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);

    const dispatch = useDispatch();

    //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(SignIn(mobilenumber, password));

        props.history.push("/");


    }



    return (
        <div className="content" style={{ backgroundColor: "#fff" }}>

            <div className="container" style={{ width: 475, height: 400, marginTop: 60, backgroundColor: "#000" }}>
                <br />
                <br />
                <br />
                <p style={{ color: "#fff", textAlign: "center" }}>___________________________________________________________</p>
                <h1 style={{ color: "#fff", textAlign: "center" }}>Sign In</h1>
                <p style={{ color: "#fff", textAlign: "center" }}>___________________________________________________________</p>

                <Form

                    onSubmit={submitHandler}
                >
                    <div

                        style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                    >

                        <FormGroup >
                            <Label
                                for="name"
                                style={{ color: "#fff" }}
                            >
                                Phone Number
                                    </Label>
                            <Input
                                style={{ color: "#fff", backgroundColor: "#000" }}
                                type="text"
                                name="name"
                                color="fff"
                                placeholder="Enter Your Phone Number"
                                size="lg"
                                value={mobilenumber}
                                onChange={(e) => setMobilenumber(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup >
                            <Label
                                for="password"
                                style={{ color: "#fff" }}
                            >
                                Password
                                    </Label>
                            <Input
                                style={{ color: "#fff", backgroundColor: "#000" }}
                                type="password"
                                name="name"
                                color="fff"
                                placeholder="Enter Password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </div>

                    <Button
                        style={{
                            color: "#000",
                            backgroundColor:"#fff"
                        }}
                        outline color="primary" size="lg" block type="submit">
                        SignIn
                    </Button>
                    <Button
                        style={{
                            color: "#000",
                            backgroundColor: "#fff"
                        }}
                        outline color="primary" size="lg" block type="submit">
                        <a href="/shoperregistration">Create Shopper Account?</a>
                    </Button>
                </Form>

            </div>



        </div >
    )
}
export default SigninScreen;