import * as React from "react";
import PokemonCard from "./PokemonCard";
import styles from "./styles.module.css";
import { useI18n } from "../../contexts/i18nContext";

function Search({
  handleRemovePokemon,
  handleAddPokemon,
  onSubmit,
  pokemon,
  isFavorite,
  status,
}) {
  const [pokemonName, setPokemonName] = React.useState("");
  const { t } = useI18n();

  function handleSubmit(event) {
    event.preventDefault();
    setPokemonName("");
    onSubmit(pokemonName);
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit} className={styles["search-form"]}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          className={styles.input}
          placeholder={t("search-placeholder")}
        />
        <button type="submit" className={styles.button}>
          {t("search")}
        </button>
      </form>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <>
          <PokemonCard pokemon={pokemon} />
          <button
            onClick={isFavorite ? handleRemovePokemon : handleAddPokemon}
            className={styles["favorite-button"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" fill="none" />
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="#3B76F6"
                fill={isFavorite ? "#3B76F6" : "none"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isFavorite ? t("remove-fav") : t("add-fav")}
          </button>
        </>
      )}
    </div>
  );
}

export default Search;
