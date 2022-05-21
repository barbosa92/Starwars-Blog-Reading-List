const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			planets: [],
			vehicles: [],
			films:[],

			favs_characters:[],
			favs_planets:[],
			favs_vehicles:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addFav: (nombre, index, tipo) => {
				const store = getStore();
				const favs_characters = store.favs_characters
				if (tipo === "character") {
					alert("Hola " + nombre)
					console.log(store.characters[index])
					const fav = (store.characters[index]);
					// setStore({ favs_characters: fav });
					setStore(favs_characters.push(fav));
					console.log(favs_characters)
					
					// setStore(favs_characters.push(store.characters[index]))
				}
				else if (tipo === "planet") {
					alert("Bonito planeta " + nombre)
				}

				else {
					alert ("vehicle")
				}
			},
			conseguirDatos: async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				// Consigue los datos de los personajes y los guarda en "characters"
				await fetch("https://swapi.dev/api/people/", requestOptions)
					.then(response => response.json())
					.then(data => {console.log(data.results)
					setStore({characters: data.results})})
					.catch(error => console.log('error', error));

				// Consigue los datos de los planetas y los guarda en "planets"
				await fetch("https://swapi.dev/api/planets/", requestOptions)
					.then(response => response.json())
					.then(data => {console.log(data.results)
					setStore({planets: data.results})})
					.catch(error => console.log('error', error));

				// Consigue los datos de los vehículos y los guarda en "vehicles"
				await fetch("https://swapi.dev/api/vehicles/", requestOptions)
					.then(response => response.json())
					.then(data => {console.log(data.results)
					setStore({vehicles: data.results})})
					.catch(error => console.log('error', error));
				
				// Consigue los datos de los vehículos y los guarda en "vehicles"
				await fetch("https://swapi.dev/api/films/", requestOptions)
				.then(response => response.json())
				.then(data => {console.log(data.results)
				setStore({films: data.results})})
				.catch(error => console.log('error', error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
