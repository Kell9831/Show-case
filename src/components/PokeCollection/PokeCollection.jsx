import { useLocalStorage } from "../../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import styles from "./styles.module.css";

function PokeCollection() {
  const [username, setUsername] = useLocalStorage("poke-username", "");

  return (
    <div className={styles.wrapper}>
      {username ? (
        <Dashboard username={username} onExit={() => setUsername("")} />
      ) : (
        <Login onLogin={setUsername} />
      )}
    </div>
  );
}

export default PokeCollection;
