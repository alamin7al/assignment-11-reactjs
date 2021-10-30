// import React, { useRef } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import {  useParams } from 'react-router';
// import Useauth from '../Firebase/Useauth';

// const Detailstc = () => {
//     const { id } = useParams();
//     const { users } = Useauth()
//     // const history = useHistory();
//     // const redirect = '/my-order';

//     const nameRef = useRef();
//     const emailRef = useRef();
//     const desRef = useRef();
//     const number = useRef();
//     const productIdRef = useRef()
//     const productNameRef = useRef();

//     const [data, setData] = useState({});
//     const url = `http://localhost:5000/single/${id}`
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setData(data));
//     }, []);

//     const handlehtmlForm = e => {
//         const email = emailRef.current.value;
//         const name = nameRef.current.value;
//         const addre_ss = desRef.current.value;
//         const phone = number.current.value;
//         const p_name = productNameRef.current.value;
//         const p_id = productIdRef.current.value;

//         const Newuser = { id: p_id, name: name, email: email, address: addre_ss, number: phone, productName: p_name }

//         fetch('http://localhost:5000/traveldata', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(Newuser)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     alert('We recived your order.');

//                 }
//                 e.target.reset()
//                 // history.push(redirect);

//             })


//         e.preventDefault()
//     }


//     return (
//         <Container>
//             <div className="font register-volunteer">
//                 <h2 className="text-primary">Fill this form to procced.</h2>
//                 <form onSubmit={handlehtmlForm}>
//                     <legend className="legend-text">User Name</legend>
//                     <input ref={nameRef} type="text" required placeholder="Full name" value={users.displayName} />
//                     <legend className="legend-text">User Email</legend>
//                     <input ref={emailRef} type="text" required placeholder="Type email or username" value={users.email} />
//                     <legend className="legend-text">Product id</legend>
//                     <input ref={productIdRef} required type="text" id="lname" name="lastname" placeholder="" value={id} />
//                     <legend className="legend-text">Product Name</legend>
//                     <input ref={productNameRef} required type="text" id="lname" name="lastname" placeholder="" value={data.name} />
//                     <legend className="legend-text">Address</legend>
//                     <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Address .ex: village, city etc" />
//                     <legend className="legend-text">Phone number</legend>
//                     <input ref={number} required type="text" id="lname" name="lastname" placeholder="your phone number" />
//                     <input type="submit" value="Place Order" />
//                 </form>
//             </div>
//         </Container>
//     );
// };

// export default Detailstc;