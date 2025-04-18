import styles from "../css/Dashboard.module.css";
import Pause from "../assets/pause.png";
const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <h1 className={styles.Dash_title}>Dashboard</h1>

      <div className={styles.Dashboard_widgets}>
        <div className={styles.Widget_top}>
          <div className={styles.Widget_left}>
            <div className={styles.Date}>
              <span>Monday</span>
              <span>10</span>
            </div>
            <span className={styles.Name}>John Neo Lopez</span>
          </div>

          <div className={styles.Widget_right}>
            <div>
              <div className={styles.Pause}>
                <span>Pause</span>
                <img src={Pause} alt="" />
              </div>
              <div></div>
            </div>
            <span className={styles.Time}>03:39:05 PM PST</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
