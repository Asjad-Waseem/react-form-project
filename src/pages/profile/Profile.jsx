// React and it's useState Hook (Hook used to add state to functional components) are being imported here

import React, { useState } from 'react';

// CSS is being imported here

import './Profile.css';

// We have used React-Bootstrap, so we are importing UI components from it

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Here we are importing Avatar Icon to be placed in case if a profile doesn't have a profile image

import Avatar from '../../assets/profile-avatar.svg';

// Here we are importing icons from react-icons library

import { CgCalendarDates } from 'react-icons/cg';
import { AiFillPhone, AiOutlineUser } from 'react-icons/ai';
import { FaAddressCard, FaUserTie } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { GoGlobe } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';

// This is our main function

function Profile() {

    // Here we are declaring states with the help of useState hook

    // formEditState is initially set to false since the initial state of the form will be just viewing info

    const [ formEditState, setFormEditState ] = useState(false);

    // We are using 2 states for the same property because, 1 will be assigned value once the user enters something in the input field and the other once will get the value from the final submitted value upon submitting the form

    const [ firstName, setFirstName ] = useState();
    const [ firstNameDisplay, setFirstNameDisplay ] = useState();

    const [ secondName, setSecondName ] = useState();
    const [ secondNameDisplay, setSecondNameDisplay ] = useState();

    const [ lastName, setLastName ] = useState();
    const [ lastNameDisplay, setLastNameDisplay ] = useState();

    const [ birthDate, setBirthDate ] = useState();
    const [ birthDateDisplay, setBirthDateDisplay ] = useState();

    const [ addressLine1, setAddressLine1 ] = useState();
    const [ addressLine1Display, setAddressLine1Display ] = useState();

    const [ city, setCity ] = useState();
    const [ cityDisplay, setCityDisplay ] = useState();

    const [ postalCode, setPostalCode ] = useState();
    const [ postalCodeDisplay, setPostalCodeDisplay ] = useState();

    const [ country, setCountry ] = useState();
    const [ countryDisplay, setCountryDisplay ] = useState();

    const [ phoneNumber1, setPhoneNumber1 ] = useState();
    const [ phoneNumber1Display, setPhoneNumber1Display ] = useState();

    const [ phoneNumber2, setPhoneNumber2 ] = useState();
    const [ phoneNumber2Display, setPhoneNumber2Display ] = useState();

    const [ profileImage, setProfileImage ] = useState();
    const [ profileImageDisplay, setProfileImageDisplay ] = useState();

    const [ ID, setID ] = useState();
    const [ IDDisplay, setIDDisplay ] = useState();

    const [ roleID, setRoleID ] = useState();
    const [ roleIDDisplay, setRoleIDDisplay ] = useState();

    const [ login, setLogin ] = useState();
    const [ loginDisplay, setLoginDisplay ] = useState();

    const [ password, setPassword ] = useState();
    const [ updatePassword, setUpdatePassword ] = useState();

    // The handleImageChange function is used to handle the change and set the profileImage

    const handleImageChange = (event) => {
        setProfileImage({ profileImage: URL.createObjectURL(event.target.files[0]) })
    }

    // The handleSubmit function is used for assigning final values and submitting the form

    const handleSubmit= (e) => {

        setFirstNameDisplay(firstName);
        setSecondNameDisplay(secondName);
        setLastNameDisplay(lastName);
        setBirthDateDisplay(birthDate);
        setAddressLine1Display(addressLine1);
        setCityDisplay(city);
        setPostalCodeDisplay(postalCode);
        setCountryDisplay(country);
        setPhoneNumber1Display(phoneNumber1);
        setPhoneNumber2Display(phoneNumber2);

        // This means that if the profileImage has some value, then only set the profileImageDisplay

        if(profileImage) {
        setProfileImageDisplay(profileImage.profileImage);
        }

        setIDDisplay(ID);
        setRoleIDDisplay(roleID);
        setLoginDisplay(login);
        setUpdatePassword(password);

        // This means that we cannot submit an empty form

        e.preventDefault();

      }

      // This is the statement where your UI is displayed

    return (

            <Container className="profile__layout">
                {/* This is the top profile info row */}
                <Row>
                    <Col md={4}>
                      {profileImageDisplay ? 
                      <img className="profile__img" src={profileImageDisplay} alt = "profile__img__loading" />
                      :
                      <img className="profile__img" src={Avatar} alt = "avatar__loading" />
                      }
                    </Col>
                    <Col className="profile__info">
                      <div className="col__flex">
                        <div className="row__flex">
                            <h1>{firstNameDisplay} {secondNameDisplay} {lastNameDisplay}</h1>
                        </div>
                        <div className="row__flex">
                        <HiOutlineMail className="info__icon" />
                            <h5 className="email">{IDDisplay}
                            <span className="role__id"> - 
                            <FaUserTie className="info__icon user__role__icon" />
                            {roleIDDisplay} </span></h5>
                        </div>
                        <br/>
                        <div className="row__flex">
                            <h5 className="birthday__date"> 
                            <CgCalendarDates className="info__icon calendar__icon" />
                            Birth Date:
                            <span> {birthDateDisplay} </span></h5>
                        </div>
                      </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                {/* This is the below Account row */}
                <Row>
                    <h3 className="account">Account</h3>
                        <br/>
                            <hr className="line__breaker"/>
                                <Form onSubmit={e => { handleSubmit(e) }}>
                                    <Row>
                                        <Col md={4}>
                                            First Name
                                        </Col>
                                    <Col>
                                        {formEditState ? 
                                            <input className="col-md-8"
                                                type="text"
                                                name="firstName"
                                                value={firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                placeholder="First Name"
                                            />
                                            :
                                            <p>{firstNameDisplay}</p>
                                        }
                                    </Col>
                                    </Row>
                                    <br/>
                                    <Row>

                                        <Col md={4}>
                                            Second Name
                                        </Col>
                                        <Col>
                                            {formEditState ? 
                                                <input className="col-md-8"
                                                 type="text"
                                                 name="secondName"
                                                 value={secondName}
                                                 onChange={e => setSecondName(e.target.value)}
                                                 placeholder="Second Name"
                                            />
                                            :
                                            <p>{secondNameDisplay}</p>
                                            }
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col md={4}>
                                            Last Name
                                        </Col>
                                        <Col>
                                            {formEditState ? 
                                                <input className="col-md-8"
                                                 type="text"
                                                 name="lastName"
                                                 value={lastName}
                                                 onChange={e => setLastName(e.target.value)}
                                                 placeholder="Last Name"
                                        />
                                        :
                                        <p>{lastNameDisplay}</p>
                                        }
                                        </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col md={4}>
                                                <CgCalendarDates className="form__icon" />
                                                    Birth Date
                                            </Col>
                                            <Col>
                                            {formEditState ?
                                                <input className="col-md-8"
                                                    type="date"
                                                    name="birthDate"
                                                    value={birthDate}
                                                    onChange={e => setBirthDate(e.target.value)}
                                                    placeholder="Birth Date"
                                                />
                                                :
                                                <p>{birthDateDisplay}</p>
                                                }
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col md={4}>
                                                <FaAddressCard className="form__icon" />
                                                    Address Line 1
                                            </Col>
                                            <Col>
                                            {formEditState ?
                                                <input className="col-md-8"
                                                 type="text"
                                                 name="addressLine1"
                                                 value={addressLine1}
                                                 onChange={e => setAddressLine1(e.target.value)}
                                                 placeholder="Address Line 1"
                                                />
                                                :
                                                <p>{addressLine1Display}</p>
                                            }
                                            </Col>
                                        </Row>
                                        <br/>
                                            <Row>
                                                <Col md={4}>                            
                                                    <GiModernCity className="form__icon" />
                                                        City
                                                </Col>
                                                <Col>
                                                    {formEditState ?
                                                        <input className="col-md-8"
                                                         type="text"
                                                         name="city"
                                                         value={city}
                                                         onChange={e => setCity(e.target.value)}
                                                         placeholder="City"
                                                        />
                                                    :
                                                    <p>{cityDisplay}</p>
                                                    }
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col md={4}>
                                                    Postal Code
                                                </Col>
                                                <Col>
                                                    {formEditState ?
                                                        <input className="col-md-8"
                                                               type="number"
                                                               name="postalCode"
                                                               value={postalCode}
                                                               onChange={e => setPostalCode(e.target.value)}
                                                               placeholder="Postal Code"
                                                        />
                                                        :
                                                        <p>{postalCodeDisplay}</p>
                                                    }
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col md={4}>
                                                    <GoGlobe className="form__icon" />
                                                        Country
                                                </Col>
                                                <Col>
                                                    {formEditState ?
                                                        <input className="col-md-8"
                                                               type="text"
                                                               name="country"
                                                               value={country}
                                                               onChange={e => setCountry(e.target.value)}
                                                               placeholder="Country"
                                                        />
                                                        :
                                                        <p>{countryDisplay}</p>
                                                    }
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col md={4}>
                                                    <AiFillPhone className="form__icon" />
                                                        Phone Number 1
                                                </Col>
                                                <Col>
                                                    {formEditState ?
                                                        <input className="col-md-8"
                                                               type="text"
                                                               name="phoneNumber1"
                                                               value={phoneNumber1}
                                                               onChange={e => setPhoneNumber1(e.target.value)}
                                                               placeholder="Phone Number 1"
                                                        />
                                                        :
                                                        <p>{phoneNumber1Display}</p>
                                                    }
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col md={4}>
                                                    <AiFillPhone className="form__icon" />
                                                        Phone Number 2
                                                </Col>
                                                <Col>
                                                    {formEditState ?
                                                        <input className="col-md-8"
                                                               type="text"
                                                               name="phoneNumber2"
                                                               value={phoneNumber2}
                                                               onChange={e => setPhoneNumber2(e.target.value)}
                                                               placeholder="Phone Number 2"
                                                        />
                                                        :
                                                        <p>{phoneNumber2Display}</p>
                                                    }
                                                </Col>
                                            </Row>
                                            <br/>
                                                {formEditState ?
                                                    <Row>
                                                        <Col md={4}>
                                                            <AiOutlineUser className="form__icon" />
                                                                Profile Image
                                                        </Col>
                                                        <Col>
                                                            <input className="col-md-8"
                                                                   type="file"
                                                                   name="profileImage"
                                                                   onChange={handleImageChange}
                                                                   placeholder="Profile Image"
                                                            />
                                                        </Col>
                                                    </Row>
                                                    :
                                                null}
                                                    {formEditState ?
                                                        <br/>
                                                    : null}
                                                    <Row>
                                                        <Col md={4}>
                                                            <HiOutlineMail className="form__icon" />
                                                                ID
                                                        </Col>
                                                        <Col>
                                                            {formEditState ?
                                                                <input className="col-md-8" 
                                                                       type="email"
                                                                       name="ID"
                                                                       value={ID}
                                                                       onChange={e => setID(e.target.value)}
                                                                       placeholder="Email ID"
                                                                />
                                                            :
                                                                <p>{IDDisplay}</p>
                                                            }
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Row>
                                                        <Col md={4}>
                                                            <FaUserTie className="form__icon" />
                                                                Role ID
                                                        </Col>
                                                        <Col>
                                                            {formEditState ?
                                                                <input className="col-md-8"
                                                                       type="text"
                                                                       name="roleID"
                                                                       value={roleID}
                                                                       onChange={e => setRoleID(e.target.value)}
                                                                       placeholder="Role ID"
                                                                />
                                                            :
                                                                <p>{roleIDDisplay}</p>
                                                            }
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Row>
                                                        <Col md={4}>
                                                            Login
                                                        </Col>
                                                        <Col>
                                                            {formEditState ?
                                                                <input className="col-md-8"
                                                                       type="text"
                                                                       name="login"
                                                                       value={login}
                                                                       onChange={e => setLogin(e.target.value)}
                                                                       placeholder="Login"
                                                                />
                                                                :
                                                                <p>{loginDisplay}</p>
                                                            }
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    {formEditState ?
                                                    <Row>
                                                        <Col md={4}>
                                                            Password
                                                        </Col>
                                                        <Col>
                                                            <input className="col-md-8"
                                                                   type="password"
                                                                   name="password"
                                                                   value={password}
                                                                   onChange={e => setPassword(e.target.value)}
                                                                   placeholder="Password"
                                                            />
                                                        </Col>
                                                    </Row>
                                                    : null}
                                                    <br/>
                                                    <Row>
                                                        <Col md={4} />
                                                        <Col>
                                                            {formEditState ? 
                                                                <Button value="Save"
                                                                        onClick={() => setFormEditState(!formEditState)}> Save 
                                                                </Button>
                                                            : 
                                                                <Button value="Edit"
                                                                        type="submit"
                                                                        onClick={(e) => {
                                                                        setFormEditState(!formEditState);
                                                                }}> 
                                                                    Edit
                                                                </Button>
                                                            }
                                                        </Col>
                                                    </Row>
                                </Form>
                            
                </Row>
            </Container>
            
    );
}

// This is your final export statement so that your component can be imported somewhere else

export default Profile;