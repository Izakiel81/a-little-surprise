import { useState } from "react";
import Letter from "../../letter/Letter";
import styles from "./Heart.module.scss";
import Note from "./note/Note";

const Heart = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={styles.heart__wrapper}>
      <div className={styles.heart__container}>
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
