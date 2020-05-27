import React from "react";
import ResultsDrawer from "../Results/Drawer.js";
import SingleLineGridList from "./Pictures.js"; 
import TextAbout from "./TextAbout.js";

function About() {
    return(
        <div>
            <SingleLineGridList/>
            <ResultsDrawer/>
            <TextAbout/>
            
        </div>
    )
}

export default About; 