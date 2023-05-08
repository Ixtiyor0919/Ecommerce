// import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layoutroute(props) {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="">
      <Header />
      <div className="flex-1 min-h-screen max-w-[1250px] mx-auto p-5">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layoutroute;
