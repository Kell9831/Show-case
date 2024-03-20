import styles from "./styles.module.css";

function ProjectCard({ title, imgUrl, tags, onClick }) {
  return (
    <button className={styles.card} onClick={onClick}>
      <img
        src={imgUrl}
        alt=""
        width="320"
        height="320"
        className={styles.image}
      />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>{" "}
    </button>
  );
}

export default ProjectCard;
