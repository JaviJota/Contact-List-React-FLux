import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const getContact = store.contacts.find(contact => contact.id === parseInt(params.theid));
	const [contact, setContact] = useState(getContact);
	const navigate = useNavigate();

	const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

	const handleSubmit = (e) => {
		e.preventDefault();
		actions.editContact(store.username, contact.id, contact);
		navigate('/agenda/');
	}
	
	return (
		<>
			<div className="text-center mt-5">
				<img width={150} className="rounded-circle" src={store.userImageUrl} alt="" />
				<form action="submit" className="mt-5" onSubmit={handleSubmit}>
					<div className="mb-3 d-flex flex-column">
					<label htmlFor="name"><b>Nombre:</b></label>
					<input type="text" name="name" id="name" value={contact.name} onChange={handleChange} className="form-control w-25 mx-auto mt-1" placeholder="Name" />
					</div>
					<div className="mb-3 d-flex flex-column">
					<label htmlFor="email"><b>Email:</b></label>
					<input type="text" name="email"  id="email" value={contact.email} onChange={handleChange} className="form-control w-25 mx-auto mt-1" placeholder="Email" />
					</div>
					<div className="mb-3 d-flex flex-column">
					<label htmlFor="Phone"><b>Phone:</b></label>
					<input type="text" name="phone" id="phone" value={contact.phone} onChange={handleChange} className="form-control w-25 mx-auto mt-1"  placeholder="Phone" />
					</div>
					<div className="mb-3 d-flex flex-column">
					<label htmlFor="address"><b>Address:</b></label>
					<input type="text" name="address" id="address" value={contact.address} onChange={handleChange} className="form-control w-25 mx-auto mt-1"  placeholder="Address" />
					</div>				
			<div className="text-center mt-4">
				<button className="btn btn-success btn-lg" type="submit">
					Save changes
				</button>
			</div>	
				</form>
			</div>
		</>
	);
};
