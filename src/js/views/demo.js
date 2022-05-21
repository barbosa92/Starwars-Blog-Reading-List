import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				
				{store.favs_characters?.map((element, index) => {
					{console.log(element.name)}
					{console.log(index)}
					<li className="mt-2" key={index}>
						{element.name}
								
					</li>
				})}
				
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
