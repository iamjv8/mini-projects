import Board from "./Board";
import styles from "./styles.module.css";
const TicTacToe = () => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
};

export default TicTacToe;
