import { FC } from "react";
import styles from "./Letter.module.scss";

interface ILetterProps {
    setShow: (show: boolean) => void;
}

const Letter:FC<ILetterProps> = ({setShow}) => {
  return (
    <div className={styles.letter__wrapper}>
      <div className={styles.overlay} onClick={() => setShow(false)}/>
      <div className={styles.letter__container}>
        <div className={styles.letter} onClick={() => setShow(false)}>
          Вимріяна і близька донині,
          <br /> Незнайома, але й знана теж,
          <br /> Заховавшись в довгій самотині,
          <br /> Вже мене не кличеш, не зовеш.
          <br /> Спогадами не повернеш хвилі,
          <br /> В сумі сновидіння не відкинь, <br />
          Не скорись непам’яті в знесиллі
          <br /> І фантазувати не покинь.
          <br /> Не зрони кохання в теплім гніві — <br />
          Ти мені дорогу перейшла,
          <br /> Опустивши очі мовчазливі,
          <br /> Лиш на серці легкий сплеск весла.
          <br /> Може, ти нічого не забула, <br />
          Може, ти і досі зберегла <br />
          Серце, розтривожене і чуле, — <br /> Тільки все припорошила мла.
          <br />
          (Василь Стус)
        </div>
      </div>
    </div>
  );
};

export default Letter;
