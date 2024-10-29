import Heart from "./heart/Heart";
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main_page__wrapper}>
      <Heart />
    </div>
  );
};

export default MainPage;
