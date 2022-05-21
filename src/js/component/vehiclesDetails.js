import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetail = (props) => {
    const parametro = useParams();
    const {store, actions} = useContext(Context);
    return <>
        <h1>Name: {store.vehicles[parametro.index]?.name}</h1>
        <h2>Model: {store.vehicles[parametro.index]?.model}</h2>
        <h2>Manufacturer: {store.vehicles[parametro.index]?.manufacturer}</h2>
        <h2>Cost in credits: {store.vehicles[parametro.index]?.cost_in_credits}</h2> 
        <h2>Length:{store.vehicles[parametro.index]?.length}</h2>
        <h2>Max. atmosphering speed:{store.vehicles[parametro.index]?.max_atmosphering_speed}</h2> 
        <h2>Crew: {store.vehicles[parametro.index]?.crew}</h2> 
        <h2>Passengers: {store.vehicles[parametro.index]?.passengers}</h2> 
        <h2>Cargo capacity: {store.vehicles[parametro.index]?.cargo_capacity}</h2> 
        <h2>Consumables: {store.vehicles[parametro.index]?.consumables}</h2> 
        <h2>Vehicle class: {store.vehicles[parametro.index]?.vehicle_class}</h2> 
        <h2>Pilots: {store.vehicles[parametro.index]?.pilots}</h2> 
        <h2>Films: {store.vehicles[parametro.index]?.films}</h2> 

    
    </> 
}