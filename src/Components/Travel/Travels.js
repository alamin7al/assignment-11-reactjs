import React from 'react';
import { useEffect, useState } from 'react';

const Travels = () => {
    const [users, setUser] = useState([])
    const [isdeleted, setDeleted] = useState(null)
    useEffect(() => {
        fetch('https://stormy-coast-94004.herokuapp.com/traveldata')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isdeleted])
    const handleDelet = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`https://stormy-coast-94004.herokuapp.com/productD/${id}`, {
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
                    } else {
                        setDeleted(false)
                    }

                })
        }

    }
    console.log(users);
    return (
        <div>
            <h2>All Order Registration List</h2>
            <div className="container">
                <div className="row">
                    {
                        users.map(user => <div className="col-md-4">

                            <div className="card-body p-3 card-body shadow p-3 mb-5 bg-body rounded">
                                <p className="card-title fs-3">Name: {user.name}</p>
                                <p className="card-title">Email: {user.email}</p>
                                <p className="card-title">Number: {user.phone}</p>
                                <p className="card-title">City: {user.city}</p>
                                <p className="card-title">ProductName: {user?.productName.slice(0, 30)}</p>
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