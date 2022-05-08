import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

// const Home = () => {
// 	return (<div classNameName="container">
  
// 				{/* <h1 style={{text-align:"center", color:"green"}}>GeeksforGeeks</h1> */}
// 				<h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>ToDo</h2>
// 				<h3>
// 					To make horizontal scrollable in a bootstrap row?
// 				</h3>
// 				<div classNameName="container horizontal-scrollable">
// 					<div classNameName="row text-center">
// 						<div classNameName="col-xs-4">1</div>
// 						<div classNameName="col-xs-4">2</div>
// 						<div classNameName="col-xs-4">3</div>
// 						<div classNameName="col-xs-4">4</div>
// 						<div classNameName="col-xs-4">5</div>
// 						<div classNameName="col-xs-4">6</div>
// 						<div classNameName="col-xs-4">7</div>
// 					</div>
// 				</div>
// 			</div>)
// };

// export default Home;
const Card= () =>{
	return <div className="card" style={{width: "18rem;"}}>
	<img className="card-img-top" src="..." alt="Card image cap"></img>
	<div className="card-body">
	  <h5 className="card-title">Card title</h5>
	  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	  <a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
  </div>
}

export default function App() {
  return (
    <div className="App">

      	<div className="characters">
			<h1>Characters</h1>
			<div className="scrollable-div">
				<Card/>
				<Card/>
				<Card/>
			</div>
	  	</div>

		<div className="planets">
			<h1>Planets</h1>
			<div className="scrollable-div">
				<Card/>
				<Card/>
				<Card/>
			</div>
	  	</div>
		
		<div className="Ships">
			<h1>Ships</h1>
			<div className="scrollable-div">
				<Card/>
				<Card/>
				<Card/>
			</div>
	  	</div>
		  
    </div>
  );
}


