import Board from "./Board";
import styles from "./styles.module.css";
const TicTacToe = () => {
  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default TicTacToe;
