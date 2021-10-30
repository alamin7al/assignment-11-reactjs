import React, { useEffect, useState } from 'react';
import { useForm, } from "react-hook-form";
import Useauth from '../Firebase/Useauth';
import {
    useParams

} from "react-router-dom";
const Details = () => {
    const [travel, setTravel] = useState([])
    const { id } = useParams()
    const { users } = Useauth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/single/${id}`)
            .then(res => res.json())
            .then(data => setTravel(data))
    }, [])
    const onSubmit = data => {
        fetch('http://localhost:5000/traveldata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }

                // history.push(redirect);

            })

       
       
    };
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card-body">
                            <img src={travel.img} class="card-img-top" alt="..." />
                            <h5 className="card-title">{travel.Category}</h5>
                            <p className="card-text">{travel.name}</p>
                            <p className="card-text">Ticket {travel.price}</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form className="shipping-form w-50 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-3 text-start">
                                <label for="exampleInputEmail1" className="form-label">User Name</label>
                                <input defaultValue={users.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">User Email</label>
                                <input defaultValue={users.email} {...register("email", { required: true })} className="form-control" id="exampleInputPassword1" />
                            </div>

                            {errors.email && <span className="error">This field is required</span>}

                            {travel.Category && <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Travel Name</label>
                                <input defaultValue={travel.Category} placeholder="Address"  {...register("productName")} className="form-control" id="exampleInputPassword1" />

                            </div>}
                            <div className="mb-3 text-start">

                                <label for="exampleInputPassword1" className="form-label">City Name</label>
                                <input placeholder="City"  {...register("city")} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Number</label>
                                <input placeholder="phone number" {...register("phone")} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>



            </div>

        </div>
    );
};

export default Details;
