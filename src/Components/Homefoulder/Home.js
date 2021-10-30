import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Carousal from './Carousal';
import Section from './Section';
const Home = () => {
    const [travels, settravels] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toursist')
            .then(res => res.json())
            .then(data => settravels(data))
    }, [])
    
    return (
        <div>
            <Carousal></Carousal>
            <div className="container">
            
                <div className="row">
                    {
                        travels.map((pd, index) =>
                            <div className="col-md-4">
                                <div className="card-body">
                                <img src={pd.img}class="card-img-top" alt="..."/>
                                    <h5 className="card-title">{pd.Category}</h5>
                                    <p className="card-text">{pd.name.slice(0, 80)}</p>
                                    <p className="card-text">Ticket {pd.price}</p>
                                    <Link to={`/details/${pd._id}`}><button  className="btn btn-outline-dark btn-lg">Booking</button></Link>

                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
            <Section></Section>
        </div>
    );
};

export default Home;