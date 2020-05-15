import React, {Component} from 'react';
import GoButton from "./Button"
import '../../App.css';
import Sentiment from 'sentiment';
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

    findSentiment(event) {
        const result = sentiment.analyze(event.target.value)
        this.setState ({
            sentimentScore: result.score
        })
        if (result.score < 0) {
            this.setState({
                generalSentiment: 'Negative'
            })
    } else if (result.score > 0) {
        this.setState({
            generalSentiment: 'Postive'
        })
    } else {
        this.setState({
            generalSentiment: 'Neutral' 
    })
}
    }

    render() {
        return(
            <div className = "parent">
                <h2 style={{color: "black"}}>Text Sentiment Anaysis</h2>
                <p style={{color: "black"}}>Enter text for real-time analysis:</p>
                <textarea onChange={this.findSentiment}/>
        <p style={{color: "black"}}>Sentiment Score: {this.state.sentimentScore}</p>
        <p style={{color: "black"}}>General Sentiment: {this.state.generalSentiment}</p>
                <GoButton/>
            </div>    
        ) 
    }
}

export default TypeBox;
