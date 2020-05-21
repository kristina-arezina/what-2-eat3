import React, {Component} from 'react';
import GoButton from "./Button"
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import Sentiment from 'sentiment';
import SideBar from "../Results/SideBar";

const sentiment = new Sentiment();

class TypeBox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sentimentScore: null,
            generalSentiment: null,
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
                generalSentiment: 'Upset 😔'
            })
        } else if (result.score > 0) {
        this.setState({
            generalSentiment: 'Happy 😃'
        })
        } else {
        this.setState({
            generalSentiment: 'Chill 😐' 
        })
        }
    }

    render() {
        return(
            <div style={{ backgroundColor:"#f4f4f4",
                        backgroundAttachment: "scroll",
                        marginLeft:"40px",
                        }}>
                
                <h2 style={{top:"70px", color: "black", position: "relative",left: "calc(40% - 250px)",marginLeft:"40px",}}>Text Sentiment Anaysis</h2>
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
            <SideBar generalSentiment={this.state.generalSentiment}/>
            </div>    
        ) 
    }
}

export default TypeBox;
