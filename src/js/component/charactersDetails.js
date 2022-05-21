import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = (props) => {
    const parametro = useParams();
    const {store, actions} = useContext(Context);
    return <>
        <h1>Name: {store.characters[parametro.index]?.name}</h1>
        <h2>Height: {store.characters[parametro.index]?.height}</h2>
        <h2>Mass: {store.characters[parametro.index]?.mass}</h2> 
        <h2>Hair color:{store.characters[parametro.index]?.hair_color}</h2>
        <h2>Skin color:{store.characters[parametro.index]?.skin_color}</h2> 
        <h2>Eye color: {store.characters[parametro.index]?.eye_color}</h2> 
        <h2>Year of birth: {store.characters[parametro.index]?.birth_year}</h2> 
        <h2>Gender: {store.characters[parametro.index]?.gender}</h2> 
        <h2>Homeworld: {store.characters[parametro.index]?.homeworld}</h2> 
        <h2>Films: {store.characters[parametro.index]?.films}</h2> 
        <h2>Species: {store.characters[parametro.index]?.species}</h2> 
        <h2>Vehicles: {store.characters[parametro.index]?.vehicles}</h2> 
        <h2>Starships: {store.characters[parametro.index]?.starships}</h2> 

    
    </> 
}