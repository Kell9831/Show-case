import Square from "./Square";

import styles from "./styles.module.css";
import { calculateWinner } from "./helpers";
import { useI18n } from "../../contexts/i18nContext";

function Board({ xIsNext, squares, onPlay }) {
  const { t } = useI18n();

  function handleClick(i) {
    if (calculateWinner(squares).gameStatus !== "continue" || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const { gameStatus, winner, line = [] } = calculateWinner(squares);
  let status;
  if (gameStatus === "win") {
    status = `${t("won-game")}: ${winner}`;
  } else if (gameStatus === "tie") {
    status = t("tied-game");
  } else {
    status = `${t("next-player")}: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className={styles["board-wrapper"]}>
      <div className={styles.status}>{status}</div>
      <div>
        <div className={styles["board-row"]}>
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            isWinner={line.includes(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            isWinner={line.includes(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            isWinner={line.includes(2)}
          />
        </div>
        <div className={styles["board-row"]}>
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            isWinner={line.includes(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            isWinner={line.includes(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            isWinner={line.includes(5)}
          />
        </div>
        <div className={styles["board-row"]}>
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            isWinner={line.includes(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            isWinner={line.includes(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            isWinner={line.includes(8)}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
