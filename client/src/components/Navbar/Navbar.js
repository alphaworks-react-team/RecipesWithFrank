import React, { useState, useEffect } from "react";
import { Primary, Secondary } from "../Navbar/index.js";
import { MenuToggle } from "./MenuToggle.js";
import { MenuToggleBlack } from "./MenuToggleBlack.js";
import { primaryNavStyling, secondaryNavStyling } from "./styles.js";

const NavBar = () => {
  // State to handle conditional render && event handling
  const [navColor, setNavColor] = useState(false);

  const windowSize = useWindowSize();

  // On scroll event listener helper function
  const changeBackgroundColor = () => {
    if (window.scrollY >= 200) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <>
      {windowSize >= 1200 ? (
        <div
          style={
            !navColor ? primaryNavStyling.transparent : primaryNavStyling.white
          }
        >
          <Primary navColor={navColor} />

        </div>
      ) : (
        <div
          style={
            !navColor
              ? secondaryNavStyling.transparent
              : secondaryNavStyling.white
          }
        >
          <Secondary navColor={navColor} />
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
