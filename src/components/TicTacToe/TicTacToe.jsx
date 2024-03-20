import Board from "./Board";

import styles from "./styles.module.css";
import { useI18n } from "../../contexts/i18nContext";
import Moves from "./Moves";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const initialHistory = [Array(9).fill(null)];

function TicTacToe() {
  const [history, setHistory] = useLocalStorage("history", initialHistory);
  const [currentMove, setCurrentMove] = useLocalStorage("currentMove", 0);
  const { t } = useI18n();

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleReset() {
    setHistory(initialHistory);
    setCurrentMove(0);
  }

  return (
    <div className={styles.wrapper}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className={styles.aside}>
        <button className={styles.reset} onClick={handleReset}>
          {t("reset-button")}
        </button>
        <Moves history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}

export default TicTacToe;
