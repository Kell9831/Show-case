import { useI18n } from "../../contexts/i18nContext";
import styles from "./styles.module.css";

function Moves({ history, jumpTo }) {
  const { t } = useI18n();

  return (
    <div>
      <p className={styles["moves-sufix"]}>{t("go-to")}:</p>
      <ol className={styles.moves}>
        {history.map((squares, move) => {
          let description;
          if (move > 0) {
            description = `${t("move")} ${move}`;
          } else {
            description = t("move-0");
          }
          return (
            <li key={move}>
              <button
                className={styles["move-button"]}
                onClick={() => jumpTo(move)}
              >
                {description}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Moves;
