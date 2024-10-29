import { useState } from "react";
import Letter from "../../letter/Letter";
import styles from "./Heart.module.scss";
import Note from "./note/Note";
import { FaArrowDownLong } from "react-icons/fa6";

const Heart = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={styles.heart__wrapper}>
        
      <div className={styles.heart__container}>
      <header className={styles.heart__header}>
          <h1 className={styles.heart__heading}>Натисни сюди</h1>
          <span className={styles.heart__heading_floating_arrow}>
            <FaArrowDownLong />
          </span>
        </header>
        <span className={styles.heart} onClick={() => setShow(true)} />
        <span className={styles.note}>
          <Note />
        </span>
      </div>

      {show && <Letter setShow={setShow}/>}
    </div>
  );
};

export default Heart;
