'use client'
import React, { useEffect } from "react";
import "./App.css";
import FirstScreen from "./main.tsx";
import Header from "./header.tsx";
import ProjectsRow from "./navigation.tsx";
import AgonBlock from "./Projects/AGON/page.tsx";
import ThirtyBirdsBlock from "./Projects/30 Birds/page.tsx";
import BarterBlock from "./Projects/Barter/page.tsx";
import ZencoderBlock from "./Projects/Zencoder/page.tsx";
import { Element } from "react-scroll";
import Footer from "./footer.tsx";
import Yango from "./Projects/Yango/page.tsx";

function App() {
  useEffect(() => {
    // Set CSS variable for iPhone image path
    const publicUrl = process.env.PUBLIC_URL || '';
    document.documentElement.style.setProperty('--iphone-image', `url('${publicUrl}/Iphone.png')`);
  }, []);

  return (
    <body>
      <Header />
      <FirstScreen />
      <ProjectsRow />
      <Element name="zencoder" ><ZencoderBlock /></Element>
      <Element name="agon" ><AgonBlock /></Element>
      <Element name="30birds" ><ThirtyBirdsBlock /></Element>
      <Element name="barter"><BarterBlock /></Element>
      <Element name="yango"><Yango /></Element>
      <Footer />
    </body>
  );
}

export default App;
