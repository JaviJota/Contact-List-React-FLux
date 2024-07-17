import React from "react";
import "../../styles/home.css"
import { Link } from "react-router-dom";

export const Card = ({id, name, email, phone, address, imageUrl}) => {

    return (
        <div className="card mx-auto w-25 mb-3">
            <h5 className="card-header text-white bg-info">{name}</h5>
            <div className="card-body d-flex pb-0">
                <div>
                    <img width={100} className="card-img-left rounded-circle me-4" src={imageUrl} alt="" />
                </div>
                <div>
                    <p className="card-text"><b>Email:</b> {email}</p> 
                    <p className="card-text"><b>Phone:</b> {phone}</p>
                    <p className="card-text"><b>Address:</b> {address}</p>
                </div>
            </div>
            <div className="card-body ms-auto">
                <Link to={`/agenda/${id}`}>
                <span className="text-white btn btn-success">Edit</span> 
                </Link>
            </div>
        </div>
    )
};
