import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetail = (props) => {
    const parametro = useParams();
    const {store, actions} = useContext(Context);
    return <><h1>
        Detalles del planeta: {parametro.index}
        </h1>
        <h1>
        Nombre: {store.characters[parametro.index]?.name}
        </h1>
        <h2>Periodo de rotación: {store.characters[parametro.index]?.rotation_period}</h2>
        <h2>Periodo orbital: {store.characters[parametro.index]?.orbital}</h2> 
        <h2>Diámetro:{store.characters[parametro.index]?.diameter}</h2>
        <h2>Clima:{store.characters[parametro.index]?.climate}</h2> 
        <h2>Gravedad: {store.characters[parametro.index]?.gravity}</h2> 
        <h2>Terreno: {store.characters[parametro.index]?.terrain}</h2> 
        <h2>Agua superficial: {store.characters[parametro.index]?.surface_water}</h2> 
        <h2>Población: {store.characters[parametro.index]?.population}</h2> 
        <h2>Residentes: {store.characters[parametro.index]?.residents}</h2> 
        <h2>Películas: {store.characters[parametro.index]?.films}</h2> 

    </> 
}