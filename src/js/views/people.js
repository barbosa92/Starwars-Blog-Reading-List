import React from "react";
import "../../styles/home.css";

const People = () => {
    return <div className="container">
  
        <h1 style={"text-align:center;color:green"}> 
        GeeksforGeeks 
        </h1>
        <h3>
            To make horizontal scrollable in a bootstrap row?
        </h3>
        <div className="container horizontal-scrollable">
            <div className="row text-center">
                <div className="col-xs-4">1</div>
                <div className="col-xs-4">2</div>
                <div className="col-xs-4">3</div>
                <div className="col-xs-4">4</div>
                <div className="col-xs-4">5</div>
                <div className="col-xs-4">6</div>
                <div className="col-xs-4">7</div>
            </div>
        </div>
    </div>
}
    


export default People;