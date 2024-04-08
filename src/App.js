'use client'
import React from "react";
import "./App.css";
import FirstScreen from "./main.tsx";
import Header from "./header.tsx";
import ProjectsRow from "./navigation.tsx";
import AgonBlock from "./Projects/AGON/page.tsx";
import ThirtyBirdsBlock from "./Projects/30 Birds/page.tsx";
import BarterBlock from "./Projects/Barter/page.tsx";
import Yango from "./Projects/Yango/page.tsx";
import { Element } from "react-scroll";



function App() {
  return (
    <body>
      <Header />
      <FirstScreen />
      <ProjectsRow />
      <Element name="agon" ><AgonBlock /></Element>
      <Element name="30birds" ><ThirtyBirdsBlock /></Element>
      <Element name="barter"><BarterBlock /></Element>
      <Element name="yango"><Yango /></Element>
    </body>
  );
}

export default App;
