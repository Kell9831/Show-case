import { useI18n } from "../../contexts/i18nContext";
import PokemonCard from "./PokemonCard";
import styles from "./styles.module.css";

function Favorites({ favorites, onFavoriteClick, onExit }) {
  const { t } = useI18n();

  return (
    <div className={styles.favorites}>
      <div className={styles["favorites-header"]}>
        <p>{t("favorites")}</p>
        <button className={styles["outline-button"]} onClick={onExit}>
          {t("exit")}
        </button>
      </div>
      <div className={styles["favorite-list"]}>
        {favorites.map((fav) => (
          <PokemonCard
            key={fav.id}
            pokemon={fav}
            variant="favorite"
            onClick={onFavoriteClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
