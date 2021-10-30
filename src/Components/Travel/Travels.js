import React from 'react';
import { useEffect, useState } from 'react';

const Travels = () => {
    const [users, setUser] = useState([])
    const [isdeleted,setDeleted]=useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/traveldata')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isdeleted])
    const handleDelet = (id) => {
        fetch(`http://localhost:5000/productD/${id}`, {
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
    console.log(users);
    return (
        <div>
            <h2>All Order Registration List</h2>
            <div className="container">
                <div className="row">
                    {
                        users.map(user => <div className="col-md-4">
                           
                            <div className="card-body">
                                <p className="card-title">name: {user.name}</p>
                                <p className="card-title">Email: {user.email}</p>
                                <p className="card-title">Number: {user.phone}</p>
                                <p className="card-title">City: {user.city}</p>
                                <p className="card-title">ProductName: {user?.productName}</p>
                                <button onClick={() => handleDelet(user._id)} className='btn btn-outline-dark'>Delete</button>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Travels;