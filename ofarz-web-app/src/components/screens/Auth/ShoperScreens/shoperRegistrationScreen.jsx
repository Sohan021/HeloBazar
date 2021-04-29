import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shoperRegister } from '../../../../actions/Auth/shoperActions';
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';

function ShoperRegistrationScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.shoperRegistration);
    const { loading, shoperInfo, error } = Register;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (shoperInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [shoperInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(shoperRegister(firstname, lastname, mobilenumber, password, confirmPassword));
    }

    return (
        <div className="content" style={{ backgroundColor: "#fff" }}>

            <div className="container" style={{ width: 475, height: 630, marginTop: 60, backgroundColor: "#000" }}>
                <br />
                <br />
                <br />
                <p style={{ color: "#fff", textAlign: "center" }}>___________________________________________________________</p>
                <h1 style={{ color: "#fff", textAlign: "center" }}>Sign Up</h1>
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
                                First Name
                                    </Label>
                            <Input
                                style={{ color: "#fff", backgroundColor: "#000" }}
                                type="text"
                                name="name"
                                color="fff"
                                placeholder="Enter Your First Name"
                                size="lg"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup >
                            <Label
                                for="name"
                                style={{ color: "#fff" }}
                            >
                                Last Name
                                    </Label>
                            <Input
                                style={{ color: "#fff", backgroundColor: "#000" }}
                                type="text"
                                name="name"
                                color="fff"
                                placeholder="Enter Your Last Name"
                                size="lg"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
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
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </FormGroup>
                    </div>

                    <Button
                        style={{
                            color: "#000",
                            backgroundColor: "#fff"
                        }}
                        outline color="primary" size="lg" block type="submit">
                        SignUp
                    </Button>
                  
                </Form>

            </div>



        </div >
)

    // return <div className="form">
    //     <form onSubmit={submitHandler} >
    //         <ul className="form-container">
    //             <li>
    //                 <h2>Create Account</h2>
    //             </li>
    //             <li>
    //                 {loading && <div>Loading...</div>}
    //                 {error && <div>{error}</div>}
    //             </li>
    //             <li>
    //                 <label htmlFor="firstname">
    //                     First Name
    //                 </label>
    //                 <input type="firstname" name="firstname" id="firstname" onChange={(e) => setFirstName(e.target.value)}>
    //                 </input>
    //             </li>
    //             <li>
    //                 <label htmlFor="lastname">
    //                     Last Name
    //                 </label>
    //                 <input type="lastname" name="lastname" id="lastname" onChange={(e) => setLastName(e.target.value)}>
    //                 </input>
    //             </li>
    //             <li>
    //                 <label htmlFor="mobilenumber">
    //                     Mobilenumber
    //                 </label>
    //                 <input type="text" name="mobilenumber" id="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}>
    //                 </input>
    //             </li>

    //             <li>
    //                 <label htmlFor="password">Password</label>
    //                 <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
    //                 </input>
    //             </li>
    //             <li>
    //                 <label htmlFor="confirmPassword">Re-Enter Password</label>
    //                 <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}>
    //                 </input>
    //             </li>
    //             <li>
    //                 <button type="submit" className="button primary">Register</button>
    //             </li>
    //         </ul>
    //     </form>
    // </div>
}
export default ShoperRegistrationScreen;





