import * as React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Header = () => {
  return (
   <div>
    <span>Anabel</span>
    <div className="header-directory">
      <span>About</span>
      <span>Portfolio</span>
      <span>Contact</span>
    </div>
   </div>
  );
};

export default Header;
