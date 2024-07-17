import React, { useState, useEffect, useContext } from "react";
import { Card } from '../component/card.jsx';
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const contacts = store.contacts
	const [newContact, setNewContact] = useState({
		name: '',
		phone: '',
		email: '',
		address: ''
	})
	
	const handleNewContact = (e) => {
		const { name, value } = e.target;
		setNewContact(current => ({ ...current, [name]: value }));
	}

	const addNewContact = () => {
		actions.createContact(store.username, newContact)
		console.log(newContact)
		console.log(store.username)
	}

	return (
		<>
		<div className="text-center">
			<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newContactModal">Create new contact</button>

			{/* INICIO HTML MODAL */}
			<div className="modal fade" id="newContactModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="newContactModal" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="newContactModalLabel">New contact</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						{/* FORM DE NUEVO CONTACTO */}
						<form action="">
							<div className="text-start">
								<label className="form-label" htmlFor="name"><b>Name:</b></label>
								<input type="text" onChange={handleNewContact} value={newContact.name} id="name" name="name" className="form-control mb-3" required/>
							</div>
							<div className="text-start">
								<label className="form-label" htmlFor="name"><b>Email:</b></label>
								<input type="email" onChange={handleNewContact} value={newContact.email} id="email" name="email" className="form-control mb-3" required/>
							</div>
							<div className="text-start">
								<label className="form-label" htmlFor="name"><b>Phone:</b></label>
								<input type="text" onChange={handleNewContact} value={newContact.phone} id="phone" name="phone" className="form-control mb-3" required/>
							</div>
							<div className="text-start">
								<label className="form-label" htmlFor="name"><b>Address:</b></label>
								<input type="text" onChange={handleNewContact} value={newContact.address} id="address" name="address" className="form-control mb-3" required/>
							</div>
						<button type="button" className="btn btn-success" onClick={addNewContact} data-bs-dismiss="modal">Add contact</button>
						</form>
						{/* FIN DE FORM DE NUEVO CONTACTO */}						
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
					</div>
				</div>
			</div>
			{/* FIN HTML MODAL */}
		</div>

		{/* TARJETAS DE CONTACTO */}
		{contacts.map((contact, index)=> (
			<Card key={index} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} address={contact.address} imageUrl={store.userImageUrl}/>
		))}
		</>
	)
};