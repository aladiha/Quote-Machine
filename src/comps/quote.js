import React from 'react';
import Data from '../quotes.json';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './quote.css';


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    console.log(Data.length)
    return color;
}


class QuoteBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            quotes: Data,
            current: Data[Math.floor(Math.random() * Data.length)],
            color: getRandomColor()
        }
    }

    setRandomQuote(){
        const index = Math.floor(Math.random() * this.state.quotes.length);
        this.setState({
            current: this.state.quotes[index],
            color: getRandomColor()
        })
    }

    render(){
        return <div id="wrapper" style={{backgroundImage: `linear-gradient(to bottom right,${this.state.color} , #FFFFFF)`}}>
            <div id="quote-box">
                <p id="text" style={{color: this.state.color}}>
                <FontAwesomeIcon icon={faQuoteLeft} size="1x"/>&nbsp;
                    {this.state.current.quote}
                </p>
                <h4 id="auther" style={{color: this.state.color}}>
                    - {this.state.current.author}
                </h4>
                <div id="options">
                    <a className="twitter-share-button" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${this.state.current.quote} - ${this.state.current.author}`} target="_blank" id="tweet-quote" style={{color: this.state.color}} data-size="large"><FontAwesomeIcon icon={faTwitter} size="3x"/></a>
                    <button onClick={this.setRandomQuote.bind(this)} style={{backgroundColor: this.state.color}} id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
    }
};

export default QuoteBox;