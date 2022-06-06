import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";






export default function App() {
	const {store, action} = useContext(Context);

  return    <div className="App">

				<div className="characters">
					<h1>Characters</h1>
					<div className="scrollable-div">
					{
					store.characters?.map((obj, i) => {
						return <Characters name={obj.name} gender={obj.gender} i={i}/>
					})
					}
					
					</div>
				</div>

				<div className="planets">
					<h1>Planets</h1>
					<div className="scrollable-div">
					{
					store.planets?.map((obj, i) => {
						return <Planets namePlanets={obj.name} population={obj.population} i={i}/>
					})
					}
					</div>
				</div>
				
				<div className="Ships">
					<h1>Ships</h1>
					<div className="scrollable-div">
					{
					store.vehicles?.map((obj, i) => {
						return <Vehicles nameVehicles={obj.name} crew={obj.crew} i={i}/>
					})
					}
					</div>
				</div>

				<div className="list">
					<h2>Favoritos</h2>
					<ul>
						
						{store.favs_characters?.map((element, index) => {
							
							return (<li className="mt-2" key={index}>
								{element.name}
							</li>)
						})}
						
					</ul>

					{/* <ul>
						{lista?.map((object, index) => {
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
					</ul> */}
					
				</div>
				
			</div>
}


