import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Carousal from './Carousal';
import Section from './Section';
const Home = () => {
    const [travels, settravels] = useState([])

    useEffect(() => {
        fetch('https://stormy-coast-94004.herokuapp.com/toursist')
            .then(res => res.json())
            .then(data => settravels(data))
    }, [])
    
    return (
        <div>
            <Carousal></Carousal>
            <div className="container">
            <h2 className='fs-1 mt-5 mb-2 text-upercase  lead'>Our Travel List</h2>
                <div className="row shadow-lg p-3 mb-5 bg-body rounded">
                    {
                        travels.map((pd, index) =>
                            <div className="col-md-4 p-3">
                                <div className="card-body shadow p-3 mb-5 bg-body rounded">
                                <img src={pd.img}class="card-img-top  h-50" alt="..."/>
                                    <h5 className="card-title">{pd.Category.slice(0, 30)}</h5>
                                    <p className="card-text">{pd.name.slice(0, 80)}</p>
                                    <p className="card-text">Ticket {pd.price}</p>
                                    <Link to={`/details/${pd._id}`}><button  className="btn btn-outline-dark btn-sm">Booking</button></Link>

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