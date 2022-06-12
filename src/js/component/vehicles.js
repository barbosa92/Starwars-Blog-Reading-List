import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Vehicles= (props) =>{

	const {store, actions} = useContext(Context)

	const [disable,setDisable] = useState ("")
	useEffect(()=>store.favs_vehicles.some((objeto) => objeto.name === props.name) ? setDisable("favorito") : setDisable(""),[])
	
	return <div key={props.key} className="card" >
		<div className="card-body">
			<h5 className="card-title">{props.name}</h5>
			<p className="card-text">{props.crew}</p>
			<div className="card-buttons">
				<Link to={"/vehiculo/"+props.i}>
					<button className="more">Learn more</button>
				</Link>
				<div className="marco">
					<i  className={disable == "" ?
										"fa-regular fa-heart" :
										"fa-solid fa-heart disable"}
						onClick={() => {
							disable == "" ? (setDisable("favorito"), actions.addFav(props.name,props.i, "vehicle")):(setDisable(""), actions.deleteFav(props.name, "vehicle"))
							}}
							>

					</i>
				</div>
			</div>	
		</div>
  </div>
}