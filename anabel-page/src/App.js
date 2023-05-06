import React from "react";
import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NavBar from "./components/Navbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="App">
      <div className="gradient-wrapper">
        <Parallax pages={4}>
          <ParallaxLayer speed={1} className="layer1">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesConfig}
            />
            <NavBar />
            <div className="pg1text">
              <h1 id="pg1h1">Hi there, I'm Anabel!</h1>
              <p id="pg1shortdesc">
                I'm a software engineer with a passion for <br></br> creating
                intuitive and beautiful user interface.
              </p>
            </div>
            <div>
              <p className="scroll-text">Scroll down to learn more</p>
              <div id="scroll-icon">
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <h1> hello </h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
