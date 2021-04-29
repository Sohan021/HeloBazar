import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Card } from 'react-bootstrap'
import base from '../../../common/services/config'
import { useSelector, useDispatch } from 'react-redux';
import { agentRegister } from '../../../../actions/Auth/agentActions';
import { listCountries } from '../../../../actions/Area/countryActions';
import { listDivisions } from '../../../../actions/Area/divisionActions';
import { listDistricts } from '../../../../actions/Area/districtActions';
import { listUpozilas } from '../../../../actions/Area/upozilaActions';
import { listUnions } from '../../../../actions/Area/unionOrWardActions';
import { listMarkets } from '../../../../actions/Area/marketActions';

function AgentAddScreen(props) {

    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [mobilenumber, setMobilenumber] = useState('');
    // const [nid_number, setNid_Number] = useState('');
    // const [postalcode, setPostalCode] = useState('');
    // const [profilePhoto, setProfilePhoto] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    // const [uploading, setUploading] = useState(false);

    // const Register = useSelector(state => state.agentAdd);
    // const { loading, agentInfo, error } = Register;


    // const dispatch = useDispatch();



    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [nid_number, setNid_Number] = useState('');
    //const [nominee_PhonNumber, setNominee_PhonNumber] = useState('');
    //const [nominee_Name, setNominee_Name] = useState('');
    //const [nominee_Relation, setNominee_Relation] = useState('');
    const [agentShopName, setAgentShopName] = useState('');
    const [countryId, setCountry] = useState('');
    const [divisionId, setDivision] = useState('');
    const [districtId, setDistrict] = useState('');
    const [upozilaId, setUpozila] = useState('');
    const [unionOrWardId, setUnion] = useState('');
    const [marketId, setMarket] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [uploading, setUploading] = useState(false);


    const countryList = useSelector(state => state.countryList);
    const { countries } = countryList;

    const countryDetails = useSelector((state) => state.countryDetails);
    const { country } = countryDetails;

    const divisionList = useSelector(state => state.divisionList)
    const { divisions } = divisionList

    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    const districtList = useSelector(state => state.districtList)
    const { districts } = districtList

    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;

    const upozilaList = useSelector(state => state.upozilaList)
    const { upozilas } = upozilaList


    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;

    const unionList = useSelector(state => state.unionList)
    const { unions } = unionList

    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;


    const marketList = useSelector(state => state.marketList)
    const { markets } = marketList

    const marketDetails = useSelector((state) => state.marketDetails);
    const { market } = marketDetails;

    const Register = useSelector(state => state.agentAdd);
    const { agentInfo } = Register;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {





        if (agentInfo) {
            props.history.push(redirect);
        }

        dispatch(listCountries())
        dispatch(listDivisions())
        dispatch(listDistricts())
        dispatch(listUpozilas())
        dispatch(listUnions())
        dispatch(listMarkets())




        // setCountry(1)
        // setDivision(1)
        // setDistrict(1)
        // setUpozila(1)
        // setUnion(1)
        // setMarket(1)

        return () => {
            //
        };


    }, [agentInfo]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(agentRegister(
            firstname,
            lastname,
            mobilenumber,
            nid_number,
            postalcode,
            profilePhoto,
            countryId,
            divisionId,
            districtId,
            upozilaId,
            unionOrWardId,
            marketId,
            password,
            confirmPassword));
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('profilePhoto', file);
        setUploading(true);
        axios
            .post(base + '/api/agent/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setProfilePhoto(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };


    const saveCountryHandler = (e) => {
        //make the list empty
        setCountry(e.target.value) // then set the new list into prev variable;
        //make a request with countryId
        //divisions = resultList;
    }
    const saveDivisionHandler = (e) => {
        setDivision(e.target.value);
        //make a request with divisionId
        //districts = resultList;
    }
    const saveDistrictHandler = (e) => {
        setDistrict(e.target.value);
    }
    const saveUpozilaHandler = (e) => {
        setUpozila(e.target.value);
    }
    const saveUnionHandler = (e) => {
        setUnion(e.target.value)
    }
    const saveMarketHandler = (e) => {
        setMarket(e.target.value)
    }


    return (
        <div className="container">
            <br />
            {countries && divisions && districts && upozilas && unions && markets && (

                <div className="row">
                    <div className="col-3">

                    </div>
                    <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", padding: "20px" }}>
                        <p style={{ color: "#000", textAlign: "center" }}>___________________________________________________________</p>
                        <h1 style={{ color: "#000", textAlign: "center" }}>Add Agent</h1>
                        <p style={{ color: "#000", textAlign: "center" }}>___________________________________________________________</p>
                        <Form onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#000" }}
                                        >
                                            First Name
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="name"
                                            color="000"
                                            placeholder="Enter First Name"
                                            size="lg"
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="price"
                                            style={{ color: "#000" }}
                                        >
                                            Last Name
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Enter Last Name"
                                            size="lg"
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6">

                                    <FormGroup>
                                        <Label
                                            for="price"
                                            style={{ color: "#000" }}
                                        >
                                            Mobile Number
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Enter Phone Number"
                                            size="lg"
                                            value={mobilenumber}
                                            onChange={(e) => setMobilenumber(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="price"
                                            style={{ color: "#000" }}
                                        >
                                            NID Number
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="EnterNid Number"
                                            size="lg"
                                            value={nid_number}
                                            onChange={(e) => setNid_Number(e.target.value)}
                                        />
                                    </FormGroup>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-12">
                                    <FormGroup>
                                        <Label
                                            for="profilePhoto"
                                            style={{ color: "#000" }}
                                        >
                                            Profile Photo
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="profilePhoto"
                                            id="profilePhoto"
                                            placeholder="Profile Photo"
                                            size="lg"
                                            value={profilePhoto}
                                            onChange={(e) => setProfilePhoto(e.target.value)}
                                        />
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="file"
                                            label="Yo, pick a file!"
                                            onChange={uploadFileHandler}
                                        />
                                    </FormGroup>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            Country
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveCountryHandler}
                                        >
                                            <option>SelectCountry</option>
                                            {countries.map((country) => (
                                                <option value={country.id}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            Division
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            defaultValue={division.name}
                                            size="lg"
                                            onChange={saveDivisionHandler}
                                        >
                                            <option>SelectDivision</option>
                                            {divisions.map((division) => (
                                                <option value={division.id}>
                                                    {division.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            District
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveDistrictHandler}
                                        >
                                            <option>SelectDistrict</option>
                                            {districts.map((district) => (
                                                <option value={district.id}>
                                                    {district.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            Upozila
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveUpozilaHandler}
                                        >
                                            <option>SelectUpozila</option>
                                            {upozilas.map((upozila) => (
                                                <option value={upozila.id}>
                                                    {upozila.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>

                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            UnionOrWard
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveUnionHandler}
                                        >
                                            <option>SelectUnion</option>
                                            {unions.map((union) => (
                                                <option value={union.id}>
                                                    {union.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            Markets
                                            </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveMarketHandler}
                                        >
                                            <option>SelectMarket</option>
                                            {markets.map((market) => (
                                                <option value={market.id}>
                                                    {market.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#000" }}
                                        >
                                            Postal Code
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="postalcode"
                                            color="000"
                                            placeholder="Enter Postal Code"
                                            size="lg"
                                            value={postalcode}
                                            onChange={(e) => setPostalCode(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-6">
                                    <FormGroup >
                                        <Label
                                            for="password"
                                            style={{ color: "#000" }}
                                        >
                                            New Password
                                                </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="password"
                                            name="newPassword"
                                            color="06E2FF"
                                            placeholder="Enter Password"
                                            size="lg"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>

                                <div className="col col-lg-6">
                                    <FormGroup >
                                        <Label
                                            for="password"
                                            style={{ color: "#000" }}
                                        >
                                            Confirm Password
                                                </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="password"
                                            name="confirmPassword"
                                            color="06E2FF"
                                            placeholder="Re-EnterPassword"
                                            size="lg"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>

                            </div>

                            <Button style={{
                                color: "#000"
                            }} outline color="success" size="lg" block type="submit">
                                Update
                       </Button>

                        </Form>
                    </Card>
                    <div className="col-8">
                    </div>
                    <div className="col-2">

                    </div>
                </div>

            )
            }
            <h1>Hello</h1>
        </div >

    );
}
export default AgentAddScreen;





