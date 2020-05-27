import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Results2 from "./components/Results/Results2.js";
import About from "./components/AboutPage/About.js";
import GoButton from "./components/Home/Button";
import './App.css';
import TextField from '@material-ui/core/TextField';
import Sentiment from 'sentiment';
import SideBar from "./components/Home/SideBar";

const sentiment = new Sentiment();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sentimentScore: null,
            generalSentiment: null,
            why: "Heyo! Welcome to What2Eat",
            target:0,
        };
        this.findSentiment = this.findSentiment.bind(this);
    }

     // General sentiment logic
     findSentiment(event) {
        const result = sentiment.analyze(event.target.value)
    
        this.setState ({
            sentimentScore: result.score
        })
        
        if (result.score < 0) {
            this.setState({
                generalSentiment: 'Upset 😔',
                generalSentimentText: "From the text you have inputted it was detected that you are feeling upset! To feel better eat the foods showcased on this page. Enjoy and feel better!",
                why:"",
            })
        } else if (result.score > 0) {
        this.setState({
            generalSentiment: 'Happy 😃',
            generalSentimentText: "Happiness was detected in the text that you have inputed! To maintain your happiness eat the foods showcased on this page. Enjoy and stay happy!",
            why:"",
        })
        } else {
        this.setState({
            generalSentiment: 'Chill 😐',
            generalSentimentText: "What do you call a chilled out octopus?... a calmares. Just kidding. From the text you have inputted it was detected that you are feeling chill. To keep your state of zen and clam eat the following foods. And yes they include calamari : )",
            why:"",
        })
        }
    }
    
    render() {

        return (
            <div >
                <Router>

                    <Fragment>
                        <Route exact path="/" render={props => (
                            <React.Fragment >
                                <div style={{ backgroundColor:"#f4f4f4",
                                        backgroundAttachment: "scroll",
                                        marginLeft:"40px",
                                        position: "relative",
                                        top:"70px"
                                        }}>
                
                                    <h2 style={{top:"70px", color: "black", position: "relative",left: "calc(45% - 250px)",marginLeft:"40px",}}>Text Sentiment Anaysis</h2>
                                    <span style={{position: "relative", top:"70px",
                                            left: "calc(50% - 250px)",}}>
                                    <p>Sentiment Score: {this.state.sentimentScore}</p>
                                    <p>General Sentiment: {this.state.generalSentiment}</p>
                                    </span>
                                    
                                    <TextField style={{ width: "500px",
                                                        top:"60px",
                                                        left: "calc(50% - 250px)",
                                                        position: "relative",
                                                        marginRight:"40px",
                                                    }}
                                
                                        id="outlined-textarea"
                                        label="Enter text for real-time analysis"
                                        placeholder="Enter text for real-time analysis"
                                        multiline
                                        variant="outlined" 
                                        rows={10}
                                        onChange={this.findSentiment}
                                    />
                                <GoButton style={{marginLeft:"-20px"}}/>
                                <SideBar generalSentiment={this.state.generalSentiment} why={this.state.why} generalSentimentText={this.state.generalSentimentText} />
                                </div>    
                            </React.Fragment>
                        )}/>
                        <Route path="/results" render={props => (
                            <React.Fragment>
                                
                                <Results2/>
                                
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
