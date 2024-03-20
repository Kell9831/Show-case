import pokeApiUrl from "../../assets/poke-api.png";
import { useI18n } from "../../contexts/i18nContext";
import styles from "./styles.module.css";

function Login({ onLogin }) {
  const { t } = useI18n();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    onLogin(username);
  }

  return (
    <div className={styles["login-wrapper"]}>
      <img src={pokeApiUrl} width="320" height="160" />
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          aria-label="username"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          {t("enter")}
        </button>
      </form>
    </div>
  );
}

export default Login;
