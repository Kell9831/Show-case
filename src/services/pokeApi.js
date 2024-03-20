const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemon(pokemonName) {
  const url = BASE_URL + pokemonName;

  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}
