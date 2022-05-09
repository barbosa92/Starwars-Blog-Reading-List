import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = (props) => {
    const parametro = useParams();
    const {store, actions} = useContext(Context);
    return <><h1>
        Detalles del personaje: {parametro.index}
        </h1>
        <h1>
        Nombre: {store.characters[parametro.index]?.name}
        </h1>
        <h2>Altura: {store.characters[parametro.index]?.height}</h2>
        <h2>Peso: {store.characters[parametro.index]?.mass}</h2> 
        <h2>Color de pelo:{store.characters[parametro.index]?.hair_color}</h2>
        <h2>Color de piel:{store.characters[parametro.index]?.skin}</h2> 
        <h2>Color de ojos: {store.characters[parametro.index]?.eye_color}</h2> 
        <h2>Año de nacimiento: {store.characters[parametro.index]?.birth_year}</h2> 
        <h2>Género: {store.characters[parametro.index]?.gender}</h2> 
        <h2>Origen: {store.characters[parametro.index]?.homeworld}</h2> 
        <h2>Películas: {store.characters[parametro.index]?.films}</h2> 
        <h2>Especies: {store.characters[parametro.index]?.species}</h2> 
        <h2>Vehículos: {store.characters[parametro.index]?.vehicles}</h2> 
        <h2>Naves: {store.characters[parametro.index]?.starships}</h2> 

    
    </> 
}