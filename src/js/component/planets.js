import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Planets= (props) =>{

	const {store, actions} = useContext(Context)

	const [disable,setDisable] = useState ("")
	useEffect(()=>store.favs_planets.some((objeto) => objeto.name === props.name) ? setDisable("favorito") : setDisable(""),[])
	
	return <div key={props.key} className="card" >
		<div className="card-body">
			<h5 className="card-title">{props.name}</h5>
			<p className="card-text">{props.population}</p>
			<div className="card-buttons">
				<Link to={"/planeta/"+props.i}>
					<button className="more">Learn more</button>
				</Link>
				<div className="marco">
					<i  className={disable == "" ?
										"fa-regular fa-heart" :
										"fa-solid fa-heart disable"}
						onClick={() => {
							disable == "" ? (setDisable("favorito"), actions.addFav(props.name,props.i, "planet")):(setDisable(""), actions.deleteFav(props.name, "planet"))
							}}
							>

					</i>
				</div>
			</div>
		</div>
  </div>
}