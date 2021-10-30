import React, { useEffect, useState } from 'react';
import {
    useParams

} from "react-router-dom";
import Useauth from '../Firebase/Useauth';

const MYorder = () => {
   const  {users}=Useauth()
    const [travel, settravels] = useState([])
  
    useEffect(() => {
        fetch(`https://stormy-coast-94004.herokuapp.com/traveldata`)
            .then(res => res.json())
            .then(data => settravels(data))
    }, [])


    
 console.log(travel);
    return (
        <div>
            <div className="container my-5">
             h
                <div className="container">
                    <div className="row">
                        {
                            travel.map(tr =>
                                <div className="col-md-4">

                                    <div className="card-body">
                                        <h5 className="card-title">{tr.email}</h5>
                                        <h5 className="card-title">{tr.name}</h5>
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


//   {/* <input defaultValue={users.displayName} {...register("name")} />
//                 <input defaultValue={users.email} {...register("email", { required: true })} />
//                 {errors.email && <span className="error">This field is required</span>}
//                 <input placeholder="Address" defaultValue={travel.name} {...register("address")} />
//                 <input placeholder="City"  {...register("city")} />
//                 <input placeholder="img"  {...register("img")} />
//                 <input placeholder="phone number" {...register("phone")} />
//                 <input type="submit" /> */}
