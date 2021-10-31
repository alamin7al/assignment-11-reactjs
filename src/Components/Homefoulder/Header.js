import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Useauth from '../Firebase/Useauth';
const Header = () => {

    const { users, logOut } = Useauth()
    return (
        <div className='mb-3 container'>
            <Navbar bg="light" expand="lg container">
                <Container fluid>
                    <Navbar.Brand href="#">U.S TRAVEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='ms-5  text-decoration-none' to='/home'>Home</Link>
                            {
                                users?.email && <Link className='ms-5  text-decoration-none' to='/order'>My Order</Link>
                            }

                            {
                                users?.email && <Link className='ms-5  text-decoration-none' to='/travel'>All Orders</Link>
                            }


                            {
                                users?.email &&
                                <Link className='ms-5  text-decoration-none' to='/events'>Add Events</Link>
                            }


                        </Nav>

                        <Navbar.Collapse className="d-flex justify-content-end">
                            <Navbar.Text>
                                {
                                    users?.email ? <button onClick={logOut} className='me-3 btn btn-dark'>Logout</button> :
                                        <Link className='ms-2 fs-4 text-decoration-none' to='/login'>Login</Link>
                                }
                                Signed in as: <a>{users?.displayName}</a>

                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;





// REACT_APP-FIREBASE-API_KEY=AIzaSyB7KvIPB2FszfypHiLL62I38JT8kKdL8LA
// REACT_APP-FIREBASE-AUTH_DOMAIN=react-node-web.firebaseapp.com
// REACT_APP-FIREBASE-PROJECT_ID=react-node-web
// REACT_APP-FIREBASE-STORAGE_BUCKET=react-node-web.appspot.com
// REACT_APP-FIREBASE-MESSAGING_SENDERID=887983790899
// REACT_APP-FIREBASE-APP_ID=1:887983790899:web:871cc53ce9805305d63c46

// console.log(process.env);
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID ,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID ,
//   };

//   export default firebaseConfig