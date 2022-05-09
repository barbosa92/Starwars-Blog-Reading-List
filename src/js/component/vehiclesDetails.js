import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetail = (props) => {
    const parametro = useParams();
    const {store, actions} = useContext(Context);
    return <><h1>
        Detalles del personaje: {parametro.index}
        </h1>
        <h1>
        Nombre: {store.characters[parametro.index]?.name}
        </h1>
        <h2>Modelo: {store.characters[parametro.index]?.model}</h2>
        <h2>Fabricante: {store.characters[parametro.index]?.manufacturer}</h2>
        <h2>Coste en créditos: {store.characters[parametro.index]?.cost_in_credits}</h2> 
        <h2>Tamaño:{store.characters[parametro.index]?.length}</h2>
        <h2>Velocidad atmosférica máxima:{store.characters[parametro.index]?.max_atmosphering_speed}</h2> 
        <h2>Tripulación: {store.characters[parametro.index]?.crew}</h2> 
        <h2>Pasajeros: {store.characters[parametro.index]?.passengers}</h2> 
        <h2>Capacidad de carga: {store.characters[parametro.index]?.cargo_capacity}</h2> 
        <h2>Consumibles: {store.characters[parametro.index]?.consumables}</h2> 
        <h2>Clase de vehículo: {store.characters[parametro.index]?.vehicle_class}</h2> 
        <h2>Pilotos: {store.characters[parametro.index]?.pilots}</h2> 
        <h2>Películas: {store.characters[parametro.index]?.films}</h2> 

    
    </> 
}