import Letter from "../../letter/Letter";
import styles from "./Heart.module.scss";
import Note from "./note/Note";

const Heart = () => {
  return (
    <div className={styles.heart__wrapper}>
      <div className={styles.heart__container}>
        <span className={styles.heart} />
        <span className={styles.note}>
          <Note />
        </span>
      </div>

      <Letter/>
    </div>
  );
};

export default Heart;
