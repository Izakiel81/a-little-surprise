import styles from "./Note.module.scss";

const Note = () => {
  return (
    <div className={styles.note__container}>
      <span className={styles.note}>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
      </span>
    </div>
  );
};

export default Note;
