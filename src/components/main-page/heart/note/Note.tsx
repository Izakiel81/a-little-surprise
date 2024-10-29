import styles from "./Note.module.scss";

const Note = () => {
  return (
    <div className={styles.note__container}>
      <span className={styles.note} />
    </div>
  );
};

export default Note;
