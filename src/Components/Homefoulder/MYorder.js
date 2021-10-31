import React, { useEffect, useState } from 'react';
// import {
//     useParams

// } from "react-router-dom";
import Useauth from '../Firebase/Useauth';

const MYorder = () => {
   const  {users}=Useauth()
    const [travel, settravels] = useState([])
    const [isdeleted,setDeleted]=useState(null)

    useEffect(() => {
        fetch(`https://stormy-coast-94004.herokuapp.com/traveldata`)
            .then(res => res.json())
            .then(data => settravels(data))
    }, [isdeleted])
const myorders=travel?.filter(order=>order.email===users.email)


const handleDeleted = (id) => {
    fetch(`https://stormy-coast-94004.herokuapp.com/singledatadelet/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(result => {
            if (result.deletedCount) {
                setDeleted(true)
                alert('deleted successfull')
            }else{
                setDeleted(false)
            }

        })
   
}
console.log(myorders);
    return (
        <div>
            <div className="container ">
             <h1 className='text-center fs-1 lead mb-1'>My Order List</h1>
                <div className="container">
                    <div className="row">
                        
                        {
                            myorders.map(tr =>
                                <div className="col-md-6 ">

                                    <div className="p-5 card-body shadow p-3 mb-5 bg-body rounded">
                                        <h5 className="card-title fs-5"> Travel Name : {tr.productName}</h5>
                                        <p className="card-title">Your Email : {tr.email}</p>
                                        <p className="card-title">Travel Id : {tr._id}</p>
                                        <button onClick={() => handleDeleted(tr._id)} className='btn btn-outline-dark btn-sm'>Delete</button>
                                        {/* <p className="card-text">{travel.name}</p>
                                <p className="card-text">Ticket {travel.price}</p> */}
                                    </div>
                                </div>
                            )

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MYorder;
