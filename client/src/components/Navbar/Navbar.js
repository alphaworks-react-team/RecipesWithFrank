import React, { useState, useEffect } from "react";
import { Primary, Secondary } from "../Navbar/index.js";
import { primaryNavStyling, secondaryNavStyling } from "./styles.js";

const NavBar = () => {
  // State to handle conditional render && event handling
  const [nav, setNav] = useState(false);

  const windowSize = useWindowSize();

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
      {windowSize >= 1200 ? (
        <div
          style={!nav ? primaryNavStyling.transparent : primaryNavStyling.white}
        >

          <Primary nav={+nav} />

        </div>
      ) : (
        <div
          style={
            !nav ? secondaryNavStyling.transparent : secondaryNavStyling.white
          }
        >
          <Secondary nav={+nav} />
        </div>
      )}
    </>
  );
};

export default NavBar;

//--------------------------- Window Size Helper Function -------------------------------------

const useWindowSize = () => {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    const setSize = () => {
      setWindowSize(window.innerWidth);
    };

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
};
