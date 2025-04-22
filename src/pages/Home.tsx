import styles from "../css/Home.module.css";
import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import History from "../components/History";
import Profile from "../components/Profile";
import About from "../components/About";
import ClockModal from "../components/ClockModal";

type Props = {
  handleLogoutClick: () => void;
  isLogout: boolean;
  pageNumber: number;
  handlePageClick: (value: number) => void;
};

const Home = ({
  handleLogoutClick,
  isLogout,
  pageNumber,
  handlePageClick,
}: Props) => {
  const renderPage = () => {
    switch (pageNumber) {
      case 1:
        return <Dashboard />;
      case 2:
        return <History />;
      case 3:
        return <Profile />;
      case 4:
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={styles.Home}>
      <Nav
        handleLogoutClick={handleLogoutClick}
        handlePageClick={handlePageClick}
        pageNumber={pageNumber}
      />
      <ClockModal />

      {renderPage()}

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
