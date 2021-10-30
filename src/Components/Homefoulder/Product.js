import React from 'react';
import { Link } from "react-router-dom";
const Product = ({ product }) => {
    const { name, seller, price } = product
    return (
        <div className='col-md-4 mt-5'>
            <div className="card mb-4 ms-1" style={{ "width": "18rem" }}>
                <div className="card-body ">
                    <h5 className="card-title">{name.slice(0, 40)}</h5>
                    <p className="card-text">{seller}</p>
                    <p className="card-text">{price}</p>
                    <Link to={`/details/${product.key}`}> <button className='btn btn-primary'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;