import clsx from "clsx";

import { useI18n } from "../../contexts/i18nContext";

import styles from "./styles.module.css";

import usFlagUrl from "../../assets/us-flag.png";
import esFlagUrl from "../../assets/es-flag.png";
import { projects } from "../App/projects";

function Header({ setPage, page }) {
  const { language, setLanguage } = useI18n();

  function handleClick(e) {
    e.preventDefault();
    setPage("showcase");
  }

  const project = projects.find((p) => p.id === page);

  return (
    <header className={styles.wrapper}>
      <div className={clsx("container", styles.header)}>
        <a className={styles.title} href="" onClick={handleClick}>
          React Showcase
        </a>
        {project && (
          <div className={styles["project-pill"]}>{project.title}</div>
        )}
        <div className={styles.languages}>
          <button
            className={clsx(styles.button, {
              [styles.active]: language === "en",
            })}
            onClick={() => setLanguage("en")}
          >
            <img src={usFlagUrl} />
          </button>
          <button
            className={clsx(styles.button, {
              [styles.active]: language === "es",
            })}
            onClick={() => setLanguage("es")}
          >
            <img src={esFlagUrl} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
