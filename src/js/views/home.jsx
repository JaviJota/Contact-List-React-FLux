import { useState } from "react";
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

	const [user, setUser] = useState ('');

	const handleUserInput = (e) => {
		setUser(e.target.value)
		console.log(user)
	}

	return (
		<div className="text-center mt-5">
		<form action="submit">
			<input type="text" onChange={handleUserInput} className="form-control w-25 mx-auto mb-3" placeholder="@User" required/>
			<Link to={"/agenda/"}>
				<input type="submit" className="btn btn-primary me-2" value="Register"/>
			</Link>
			<Link>			
			<input type="submit" className="btn btn-success ms-2" value='Log in'/>
			</Link>
		</form>
	</div>
	)
};
