import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<a className="navbar-brand" href="#">Navbar</a>
				
				<div className="mb-2">
					<DropdownButton
						as={ButtonGroup}
						key={"start"}
						id={`dropdown-button-drop-${"start"}`}
						drop={"start"}
						variant="secondary"
						title={` Favourites `}
					>
						<Dropdown.Item eventKey="1">
							
							<ul>
								{store.favs_characters?.map((element, index) => {
								
									return (<li className="mt-2" key={index}>
										{element.name}
									</li>)
								})}
							</ul>

						</Dropdown.Item>
						<Dropdown.Divider />

						<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
						<Dropdown.Divider />

						<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
						<Dropdown.Divider />
						
					</DropdownButton>
					
				</div>

				{/* <Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<ul>
							{store.favs_characters?.map((element, index) => {
								<li className="mt-2" key={index}>
											{element[index]}
											
										</li>

								if (object.label == "sample task") {
								} else {
									return (
										<li className="mt-2" key={index}>
											{object.label}
											<button
												onClick={() => {
													borrar(index);
													console.log(lista);
													console.log(setLista);
												}}>
												X
											</button>
										</li>
									);
								}
							})}
						</ul>
					</Dropdown.Menu>
				</Dropdown> */}
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