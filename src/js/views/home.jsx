import { useState, useContext } from "react";
import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState ('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleUserInput = (e) => {
		setUser(e.target.value)
		console.log(user)
	};

	const verifyUser = async () => {
		setLoading(true);
		setError('');
		try {
			const resp = await fetch (`https://playground.4geeks.com/contact/agendas/${user}`);
			if (resp.ok) {
				setLoading(true);
				return true
			} else {
				setLoading(false);
				return false
			}
		} catch (error) {
			setError('Network error');
			setLoading(false);
			return false
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			const response = await actions.createUserAgenda(user);
			setLoading(false);
			if (response) {
				alert('Registered succesfully! Please log in.');
			}else {
				setError('Error registering. Please try again');
			}
		} catch (error) {
			setError('Error during registration');
			setLoading(false)
		}
	};
	
	const handleLogin = async (e) => {
		e.preventDefault();
		store.username = user 
		const isValid = await verifyUser();
		if (isValid) {
			const resp = { status: 200, message: "Login succesful" };
			if (resp.status === 200) {
				alert(resp.message);
				navigate('/agenda/')
			}
			actions.getAgenda(user)
		} else {
			setError('User not found. Please register first.')
		}
	};

	return (
		<div className="text-center mt-5">
		<form action="submit">
			<input type="text" onChange={handleUserInput} className="form-control w-25 mx-auto mb-3" placeholder="@User" required/>
			<button onClick={handleRegister} className="btn btn-primary me-2" disabled={loading} >Register</button>			
			<button onClick={handleLogin} className="btn btn-success ms-2" disabled={loading}>Log in</button>
			{loading && <p>Loading...</p>}
			{error.length > 0?  <p className="text-danger">{error}</p> : ''}
		</form>
	</div>
	)
};