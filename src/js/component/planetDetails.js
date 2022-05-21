import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetail = (props) => {
    const parametro = useParams();
    const {store, actions} = useContext(Context);
    return <>
        <h1>Name: {store.planets[parametro.index]?.name}</h1>
        <h2>Rotation period: {store.planets[parametro.index]?.rotation_period}</h2>
        <h2>Orbital period: {store.planets[parametro.index]?.orbital}</h2> 
        <h2>Diameter:{store.planets[parametro.index]?.diameter}</h2>
        <h2>Climate:{store.planets[parametro.index]?.climate}</h2> 
        <h2>Gravity: {store.planets[parametro.index]?.gravity}</h2> 
        <h2>Terrain: {store.planets[parametro.index]?.terrain}</h2> 
        <h2>Superficie con agua: {store.planets[parametro.index]?.surface_water}</h2> 
        <h2>Population: {store.planets[parametro.index]?.population}</h2> 
        <h2>Residents: {store.planets[parametro.index]?.residents}</h2> 
        <h2>Films: {store.planets[parametro.index]?.films}</h2> 

    </> 
}