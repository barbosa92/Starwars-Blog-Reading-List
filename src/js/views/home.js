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
						return <Planets name={obj.name} population={obj.population} i={i}/>
					})
					}
					</div>
				</div>
				
				<div className="Ships">
					<h1>Ships</h1>
					<div className="scrollable-div">
					{
					store.vehicles?.map((obj, i) => {
						return <Vehicles name={obj.name} crew={obj.crew} i={i}/>
					})
					}
					</div>
				</div>

			</div>
}


