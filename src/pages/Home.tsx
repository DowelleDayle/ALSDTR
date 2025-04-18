import styles from "../css/Home.module.css";
import Nav from "../components/Nav";

type Props = {
  handleLogoutClick: () => void;
  isLogout: () => void;
};

const Home = ({ handleLogoutClick, isLogout }: Props) => {
  return (
    <div className={styles.Home}>
      <Nav handleLogoutClick={handleLogoutClick} />
      {isLogout && (
        <div className={styles.Logout_main}>
          <div className={styles.Logout}>
            <span>Log Out from Your DTR Account?</span>
            <span>
              Make sure you’ve clocked in or out properly before logging out.
              Unsaved time entries might not be recorded.
            </span>
            <div className={styles.Logout_inner}>
              <button>Logout</button>
              <button onClick={handleLogoutClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
