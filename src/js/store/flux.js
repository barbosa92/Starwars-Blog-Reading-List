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
			deleteFav(nombre, tipo) {
				console.log("Entra en deleteFav")
				const store = getStore();

				if (tipo === "character") {
					console.log("Entra en character")
					const fav = (store.favs_characters);
					console.log(fav)

					let filterFav = fav.filter((valor, position) => {
						console.log(nombre)
						return valor.name != nombre;
					});

					setStore(store.favs_characters = filterFav);
					
				}

				else if (tipo === "planet") {
					console.log("Entra en planet")
					const fav = (store.favs_planets);
					console.log(fav)

					let filterFav = fav.filter((valor, position) => {
						console.log(valor.name)
						console.log(nombre)
						return valor.name != nombre;
					});

					setStore(store.favs_planets = filterFav);
				}

				else if (tipo === "vehicle") {
					console.log("Entra en vehicle")
					const fav = (store.favs_vehicles);
					console.log(fav)

					let filterFav = fav.filter((valor, position) => {
						console.log(valor.name)
						console.log(nombre)
						return valor.name != nombre;
					});

					setStore(store.favs_vehicles = filterFav);
				}
				
			},

			addFav: (nombre, index, tipo) => {
				const store = getStore();
				const favs_characters = store.favs_characters;
				const favs_planets = store.favs_planets;
				const favs_vehicles = store.favs_vehicles;
				if (tipo === "character") {
					alert("Hola " + nombre)
					const fav = (store.characters[index]);
					setStore(favs_characters.push(fav));
					
				}
				else if (tipo === "planet") {
					alert("Bienvenido a " + nombre)
					const fav = (store.planets[index]);
					setStore(favs_planets.push(fav));
				}

				else if (tipo === "vehicle") {
					alert("Damos una vuelta en el " + nombre)
					const fav = (store.vehicles[index]);
					setStore(favs_vehicles.push(fav));
				}
			},
			conseguirDatos: async () => {
				const store = getStore();

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				// Consigue los datos de los personajes y los guarda en "characters"
				for (let i = 0; i < 9; i++) {
					await fetch(`https://swapi.dev/api/people/?page=${i+1}` , requestOptions)
					.then(response => response.json())
					.then(data => {console.log(data.results)
					setStore([store.characters = store.characters.concat(data.results)])})
					.then(console.log(`Vuelta${i+1}`))
					.then(console.log(store.characters))
					.catch(error => console.log('error', error));
				}
				
				// Consigue los datos de los planetas y los guarda en "planets"
				for (let i = 0; i < 6; i++) {
					await fetch(`https://swapi.dev/api/planets/?page=${i+1}` , requestOptions)
					.then(response => response.json())
					.then(data => {console.log(data.results)
					setStore([store.planets = store.planets.concat(data.results)])})
					.then(console.log(`Vuelta${i+1}`))
					.then(console.log(store.planets))
					.catch(error => console.log('error', error));
				}

				// Consigue los datos de los veh??culos y los guarda en "vehicles"
				for (let i = 0; i < 4; i++) {
					await fetch(`https://swapi.dev/api/vehicles/?page=${i+1}` , requestOptions)
					.then(response => response.json())
					.then(data => {console.log(data.results)
					setStore([store.vehicles = store.vehicles.concat(data.results)])})
					.then(console.log(`Vuelta${i+1}`))
					.then(console.log(store.vehicles))
					.catch(error => console.log('error', error));
				}

				
				
				
				// Consigue los datos de los veh??culos y los guarda en "vehicles"
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
