import React from 'react';

import {
Link
  
  } from "react-router-dom";
const Footer = () => {
    
    return (
        <div className='design bg-dark  mb-2 border border-5 text-white'>
            <div className="container">
                <div className="container" id="icon-grid">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-1">
                        <div className="col d-flex align-items-start">
                            <div>
                                <h4 className="fw-bold ">To travel Life</h4>
                                <p className='text-start'>Below are many of my  life, and adventure. Feel free to pin and share these unique quotes and images on social media!</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h4 className="fw-bold ">Contact Us</h4>
                                <Link >Email: alamin@gmial.com </Link><br />
                                <Link> Number: 01703754409 </Link><br />
                                <Link>Addres:Dhaka Bangladesh </Link>
                              
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h4 className="fw-bold">Travel country </h4>
                                <Link > Bangladesh</Link><br />
                                <Link>America </Link><br />
                                <Link> Argentina </Link><br />
                                <Link> India </Link>
                               
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h4 className="fw-bold ">Think 32</h4>
                                <p className='text-start'> vacation, life, and adventure. Feel free to pin and share these</p>
                            </div>

                        </div>

                       
                    </div>
                    <p className='text-center text-white'>Copyright 1999-2021 by Refsnes Data. All Rights Reserved.</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
