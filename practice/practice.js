import axios from "axios";

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
.then(response => console.log(response.data.weight));

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
.then(response => console.log(response.data.height));

// find the base_experience of the clefairy
axios.get("https://pokeapi.co/api/v2/pokemon/clefairy/")
.then(response => console.log(response.data.base_experience));

axios.get("https://pokeapi.co/api/v2/location/canalave-city/")
.then(response => console.log(response.data.region.name))
