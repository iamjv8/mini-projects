import DATA from "./data";
import Nodes from "./Nodes";
import styles from "./styles.module.css";
const Directory = () => {
  return (
    <div className={styles.container}>
      <Nodes nodes={DATA} />
    </div>
  );
};

export default Directory;
