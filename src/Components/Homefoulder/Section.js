import React from 'react';
import imgt from '../Homefoulder/img/png-clipart-the-university-of-rhode-island-package-tour-travel-vacation-tourism-dubai-travels-agency-service-mode-of-transport.png'
import imgtt from '../Homefoulder/img/images (2).jpg'
import imgttt from '../Homefoulder/img/images (1).jpg'
//shadow p-3 mb-5 bg-body rounded
//d-flex justify-content-center
//align-items-center
//img-fluid img-thumbnail
//fw-normal
const Section = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-md-7">
                        <img className='img-fluid img-thumbnail' src={imgt} alt="" />
                    </div>
                    <div className="col-md-5">
                        <p className='fw-normal'>The best travel quotes are often the deepest and most powerful. As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration. For years, I’ve been collecting quotes about travel while traveling the world, and always enjoy reflecting on them in my day-to-day life. Everyone has a different lens through which they</p>
                    </div>
                </div>



                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-md-7">
                        <div class="card shadow p-3 mb-5 bg-body rounded mt-5" >
                            <div class="card-body">
                                <p class="card-text">best travel quotes that resonate with me the most. Some of these travel quotes are short, others are a bit longer. I hope you find inspiration and meaning in all of them!
                                    Below are many of my favorite travel quotes that touch upon all aspects of vacation, life, and adventure. Feel free to pin and share these unique quotes and images on social media!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className='img-fluid img-thumbnail' src={imgttt} alt="" />
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-md-9">
                        <div class="card shadow p-3 mb-5 bg-body rounded mt-2" >
                            <div class="card-body">
                                <p class="card-text fs-5 lead">best travel quotes that resonate with me the most. Some of these travel quotes are short, others are a bit longer. I hope you find inspiration and meaning in all of them!
                                Below are many of my favorite travel quotes that touch upon all aspects of vacation, life, and adventure. Feel free to pin and share these unique quotes and images on social media!Below are many of my favorite travel quotes that touch upon all aspects of vacation, life, and adventure. Feel free to pin and share these unique quotes and images on social media!Below are many of my favorite travel quotes that touch upon all aspects of vacation, life, and adventure. Feel free to pin and share these unique quotes and images on social media!</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Section;