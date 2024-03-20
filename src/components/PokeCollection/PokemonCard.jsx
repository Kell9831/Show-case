import styles from "./styles.module.css";
import rulerUrl from "../../assets/ruler.svg";
import balanceUrl from "../../assets/balance.svg";
import clsx from "clsx";
import { useI18n } from "../../contexts/i18nContext";

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function PokemonCard({ pokemon, variant = "search", onClick }) {
  const { t } = useI18n();
  const classNames = clsx(styles.card, styles[variant]);

  return (
    <div className={classNames} onClick={() => onClick(pokemon.name)}>
      <div>
        <p className={styles.name}>{capitalize(pokemon.name)}</p>
        <p className={styles.id}>{`#${("00" + pokemon.id).slice(-3)}`}</p>
      </div>
      <img
        src={pokemon.avatarUrl}
        alt={pokemon.name}
        width={variant === "search" ? 140 : 100}
        height={variant === "search" ? 140 : 100}
      />
      <div className={styles.tags}>
        {pokemon.types.map((type) => (
          <TypeTag key={type} type={type} />
        ))}
      </div>
      {variant === "search" && (
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statTop}>
              <img src={balanceUrl} />
              <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
            </div>
            <p className={styles.statBottom}>{t("weight")}</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <div className={styles.statTop}>
              <img src={rulerUrl} />
              <span>{(pokemon.height / 10).toFixed(1)} m</span>
            </div>
            <p className={styles.statBottom}>{t("height")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;

const typeColors = {
  normal: "#AAA67F",
  fighting: "#C12239",
  flying: "#A891EC",
  ground: "#DEC16B",
  poison: "#A43E9E",
  rock: "#B69E31",
  bug: "#A7B723",
  ghost: "#70559B",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  electric: "#F9CF30",
  psychic: "#FB5584",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  dark: "#75574C",
  fairy: "#E69EAC",
};

function TypeTag({ type }) {
  return (
    <div
      className={styles["type-tag"]}
      style={{ backgroundColor: typeColors[type] }}
    >
      {type}
    </div>
  );
}
