import React from "react";
import { Link } from "react-router-dom";


export const Planets= (props) =>{
	
	return <div className="card" style={{width: "18rem"}}>
	<div className="card-body">
	  <h5 className="card-title">{props.namePlanets}</h5>
	  <p className="card-text">{props.terrain}</p>
	  <Link to={"/planeta/"+props.i}>
		  <button>
		  Learn more
		  </button>
	  </Link>	</div>
  </div>
}