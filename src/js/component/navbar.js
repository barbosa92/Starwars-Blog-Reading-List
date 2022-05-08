import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<a className="navbar-brand" href="#">Navbar</a>
				
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
		</nav>
		
	);
};

// <nav classNameName="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span classNameName="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div classNameName="ml-auto">
		// 		<Link to="/demo">
		// 			<button classNameName="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>