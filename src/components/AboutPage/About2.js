import React from "react";
import ResultsDrawer from "../Results/Drawer.js";
import SingleLineGridList from "./Pictures.js"; 
import TextAbout from "./TextAbout.js";
import VerticalLinearStepper from "./HowItWorks"

function About() {
    return(
        <div>
            <SingleLineGridList/>
            <ResultsDrawer/>
            <VerticalLinearStepper/>
            <TextAbout/>
            
        </div>
    )
}

export default About; 