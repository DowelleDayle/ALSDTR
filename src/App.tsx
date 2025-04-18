import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isLogout, setIsLogout] = useState(false);
  const handleLogoutClick = () => {
    setIsLogout(!isLogout);
  };
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <Home handleLogoutClick={handleLogoutClick} isLogout={isLogout} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
