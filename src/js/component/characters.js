import React from "react";
import { Link } from "react-router-dom";

export const Characters= (props) =>{
	
	return <div className="card" style={{width: "18rem"}}>
	<div className="card-body">
	  <h5 className="card-title">{props.nameCharacter}</h5>
	  <p className="card-text">{props.gender}</p>
	  <Link to={"/personaje/"+props.i}>
		  <button>
		  Learn more
		  </button>
	  </Link>
	  
	</div>
  </div>
}