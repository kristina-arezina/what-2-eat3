import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import TypeBox from "./components/TypeBox.js";
import Results from "./components/Results/Results.js";
import About from "./components/AboutPage/About.js"

class App extends React.Component {

    
    render() {
        return (
            <div >
                <Router>

                    <Fragment>
                        <Route exact path="/" render={props => (
                            <React.Fragment >
                                <TypeBox/>
                            </React.Fragment>
                        )}/>
                        <Route path="/results" render={props => (
                            <React.Fragment>
                                <Results />
                            </React.Fragment>
                        )}/>
                        <Route path="/about" render={props => (
                            <React.Fragment>
                                <About />
                            </React.Fragment>
                        )}/>
                    </Fragment>
                </Router>
            </div>
        );
    }
}


export default App;
