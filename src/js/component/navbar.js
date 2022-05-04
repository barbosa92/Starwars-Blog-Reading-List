import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<a className="navbar-brand" href="#">Navbar</a>
				
			<ul className="navbar-nav">
				<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Dropdown link
						</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
			</ul>
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