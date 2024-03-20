import * as React from "react";
import Search from "./Search";
import Favorites from "./Favorites";

import styles from "./styles.module.css";

import { getPokemon } from "../../services/pokeApi";
import {
  createFavorite,
  deleteFavorites,
  getFavorites,
} from "../../services/pokeCollection";

function Dashboard({ username, onExit }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [favorites, setFavorites] = React.useState([]);

  const isFavorite = pokemon && favorites.find((fav) => fav.id === pokemon.id);

  React.useEffect(() => {
    getFavorites(username).then((data) => {
      setFavorites(data);
    });
  }, [username]);

  function onSubmit(pokemonName) {
    setStatus("loading");

    getPokemon(pokemonName)
      .then((data) => {
        const nextPokemon = {
          id: data.id,
          name: data.name,
          avatarUrl: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((e) => e.type.name),
          weight: data.weight,
          height: data.height,
        };
        setPokemon(nextPokemon);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        console.error(error);
      });
  }

  function handleAddPokemon() {
    createFavorite(username, pokemon).then((favorite) => {
      const nextFavorites = [...favorites, favorite];
      setFavorites(nextFavorites);
    });
  }

  function handleRemovePokemon() {
    deleteFavorites(username, pokemon.id).then(() => {
      const nextFavorites = favorites.filter((fav) => fav.id !== pokemon.id);
      setFavorites(nextFavorites);
    });
  }

  function onFavoriteClick(pokemonName) {
    setStatus("loading");

    getPokemon(pokemonName)
      .then((data) => {
        const nextPokemon = {
          id: data.id,
          name: data.name,
          avatarUrl: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((e) => e.type.name),
          weight: data.weight,
          height: data.height,
        };
        setPokemon(nextPokemon);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        console.error(error);
      });
  }

  return (
    <div className={styles["dashboard-wrapper"]}>
      <Search
        handleAddPokemon={handleAddPokemon}
        handleRemovePokemon={handleRemovePokemon}
        onSubmit={onSubmit}
        pokemon={pokemon}
        status={status}
        isFavorite={isFavorite}
      />
      <Favorites
        favorites={favorites}
        onFavoriteClick={onFavoriteClick}
        onExit={onExit}
      />
    </div>
  );
}

export default Dashboard;
