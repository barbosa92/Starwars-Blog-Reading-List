import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<a className="navbar-brand" href="/">Star Wars</a>
				
				<div className="mb-2">
					<DropdownButton
						as={ButtonGroup}
						key={"start"}
						id={`dropdown-button-drop-start"}`}
						drop={"start"}
						variant="secondary"
						title={` Favourites `}
					>
						<Dropdown.Item eventKey="1">
							
							<ul>
								{store.favs_characters?.map((element, index) => {
								
									return (<li className="mt-2" key={index}>
										<Link to={"/personaje/"+index}>
											{element.name}
										</Link>
									</li>
									
									)
								})}
							</ul>

						</Dropdown.Item>
						<Dropdown.Divider />

						<Dropdown.Item eventKey="2">

							<ul>
								{store.favs_planets?.map((element, index) => {
								
									return (<li className="mt-2" key={index}>
									<Link to={"/planeta/"+index}>
										{element.name}
									</Link>
									</li>
									)
								})}
							</ul>

						</Dropdown.Item>
						<Dropdown.Divider />

						<Dropdown.Item eventKey="3">

							<ul>
								{store.favs_vehicles?.map((element, index) => {
								
									return (<li className="mt-2" key={index}>
									<Link to={"/vehiculo/"+index}>
										{element.name}
									</Link>
									</li>
									)
								})}
							</ul>

						</Dropdown.Item>
						<Dropdown.Divider />
						
					</DropdownButton>
					
				</div>

		</nav>
		
	);
};

