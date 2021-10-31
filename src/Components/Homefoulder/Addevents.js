import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addevent.css'

const Addevents = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://stormy-coast-94004.herokuapp.com/toursist', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
//     <div className="mb-3 text-start">
//     <label for="exampleInputEmail1" className="form-label">User Name</label>
//     <input defaultValue={users.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
// </div>
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("Category", { required: true, maxLength: 200 })} placeholder="Category" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addevents;