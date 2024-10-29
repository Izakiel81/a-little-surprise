import styles from "./Heart.module.scss";

const Heart = () => {
  return (
    <div className={styles.heart__wrapper}>
      <div className={styles.heart__container}>
        <span className={styles.heart} />
      </div>
    </div>
  );
};

export default Heart;
