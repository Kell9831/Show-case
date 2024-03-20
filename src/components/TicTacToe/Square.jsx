import clsx from "clsx";
import styles from "./styles.module.css";

function Square({ value, onSquareClick, isWinner }) {
  const classNames = clsx(styles.square, isWinner && styles.winner);

  return (
    <button className={classNames} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
