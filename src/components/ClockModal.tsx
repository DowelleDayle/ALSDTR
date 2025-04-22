import styles from "../css/ClockModal.module.css";

import Picture from "../assets/picture.png";
import Calendar from "../assets/calendar.png";
import Close from "../assets/close.png";
import JK from "../assets/jk.jpg";

const ClockModal = () => {
  return (
    <div className={styles.ClockModal}>
      <div className={styles.ClockModal_inner}>
        <div className={styles.Head}>
          <img src={Close} alt="Close button" />
          <div className={styles.Head_inner}>
            <img src={Calendar} alt="Calendar Icon" />
            <span>Tuesday, Apr 22, 2025, 11:33 AM</span>
          </div>
        </div>
        <img src={JK} alt="User Picture" />
        <div className={styles.Button}>
          <button className={styles.Location}>Location Off</button>
          <div className={styles.Button_inner}>
            <button>Submit</button>
            <button>Take Picture</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockModal;
