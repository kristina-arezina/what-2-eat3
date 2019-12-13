import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import OutlinedTextFields from "./components/Home/TypeBox.js";
import Results from "./components/Results/Results.js";
import About from "./components/AboutPage/About.js"

class App extends React.Component {
    render() {

        return (
            <div className="App">
                <Router>

                    <Fragment>
                        <Route exact path="/" render={props => (
                            <React.Fragment >
                                <OutlinedTextFields />
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
