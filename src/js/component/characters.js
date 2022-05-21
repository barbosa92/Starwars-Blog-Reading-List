import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const heart = <FontAwesomeIcon icon={faHeart} />


export const Characters= (props) =>{
	const {store, actions} = useContext(Context)
	
	return <div className="card" style={{width: "18rem"}}>
		<div className="card-body">
		<h5 className="card-title">{props.name}</h5>
		<p className="card-text">{props.gender}</p>
		<Link to={"/personaje/"+props.i}>
			<button>Learn more</button>
		</Link>
		<button className="btn-success"
			onClick={(() => {
				actions.addFav(props.name,props.i, "character")
			})}
		>
			{/* {heart} */}
		</button>
		
		</div>
  </div>
}