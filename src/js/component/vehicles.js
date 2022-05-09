import React from "react";
import { Link } from "react-router-dom";


export const Vehicles= (props) =>{
	
	return <div className="card" style={{width: "18rem"}}>
	<div className="card-body">
	  <h5 className="card-title">{props.nameVehicles}</h5>
	  <p className="card-text">{props.crew}</p>
	  <Link to={"/vehiculo/"+props.i}>
		  <button>
		  Learn more
		  </button>
	  </Link>	</div>
  </div>
}