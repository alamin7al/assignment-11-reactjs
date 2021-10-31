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
console.log(myorders);

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
        console.log(id);
}
console.log(travel);
    return (
        <div>
            <div className="container my-5">
             h
                <div className="container">
                    <div className="row">
                        {
                            myorders.map(tr =>
                                <div className="col-md-4">

                                    <div className="card-body">
                                        <h5 className="card-title">{tr.email}</h5>
                                        <h5 className="card-title">{tr.name}</h5>
                                        <h5 className="card-title">{tr.productName}</h5>
                                        <button onClick={() => handleDeleted(tr._id)} className='btn btn-outline-dark'>Delete</button>
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
