import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Centerchildren from "./components/Centerchildren";
import Homeroute from "./containers/Homeroute";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homeroute />} />
      </Routes>
    </div>
  );
}

export default App;
// className={`${darkMode ? "dark" : ""} `}
