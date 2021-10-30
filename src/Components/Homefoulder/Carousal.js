import React from 'react';
import imgae from '../Homefoulder/img/tour-operators-89145.jpg'

const Carousal = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgae} className="d-block w-100" alt="..." />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Carousal;