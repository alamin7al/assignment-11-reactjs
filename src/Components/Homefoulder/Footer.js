import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className='text-center'>About The Site</h3>
                        <a className='d-block text-decoration-none' href="/general">Contact Us</a>
                        <a className='d-block text-decoration-none' href="/help">Complaint</a>
                        <a className='d-block text-decoration-none' href="/our service">Advertise</a>
                        <a className='d-block text-decoration-none' href="/privacy">Sitemap</a>

                    </div>
                    <div className="col-md-4">
                        <h4 className='text-start'>Tour Package</h4>
                        <div className='d-flex '>

                            <div className='my-auto mx-1 mt-4'>
                                <a className='d-block text-decoration-none' href="/general">Kerala</a>
                                <a className='d-block text-decoration-none' href="/help">Help Center</a>
                                <a className='d-block text-decoration-none' href="/our service">Koria</a>
                                <a className='d-block text-decoration-none' href="/privacy">America</a>
                            </div>
                            <div className='my-auto mx-1 mt-4'>
                                <a className='d-block text-decoration-none' href="/online"> South Koria </a>
                                <a className='d-block text-decoration-none' href="/help"> India  </a>
                                <a className='d-block text-decoration-none' href="/students"> Bangladesh</a>
                                <a className='d-block text-decoration-none' href="/secter"> Nasha </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className='text-end'> Popular Destination</h4>
                        <div className='d-flex '>
                            <div className='text-center mt-2 mx-3'>

                                <h6>China </h6>
                                <h6> Tourkey </h6>
                                <h6> Afgamistan </h6>
                            </div>
                            <div className='text-center mt-2 mx-3'>
                                <h6> Malawshia </h6>
                                <h6> katar  </h6>
                                <h6> Srilankha </h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
