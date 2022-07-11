import React, { useState, useEffect } from "react";
import { primaryNavStyling } from "./styles.js";
import Primary from "./Primary.js";
const NavBar = () => {
  // State to handle conditional render && event handling
  const [nav, setNav] = useState(false);

  // On scroll event listener helper function
  const changeBackgroundColor = () => {
    if (window.scrollY >= 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <>
      {
        <div
          style={primaryNavStyling.transparent }
        >

          <Primary nav={+nav} />

        </div>
       }
    </>
  );
};

export default NavBar;
