import Heart from "./heart/Heart";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.main_page__wrapper}>
      <div className={styles.main_page__container}>
        <h1 className={styles.main_page__heading}>Натисни сюди</h1>
        <span className={styles.main_page__heading_floating_arrow}></span>
        <Heart />
      </div>
    </div>
  );
};

export default MainPage;
