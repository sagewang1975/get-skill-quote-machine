import React,{useState} from 'react';
import './App.scss';

function App() {const [quote, setQuote] = useState("We become what we think about.");

                const [author,setAuthor] = useState("Earl Nightingale")

                const getRandomQuote=()=>{
                  let randomInteger=Math.floor(quotesArray.length*Math.random())
                  setQuote(quotesArray[randomInteger].quote)
                    setAuthor(quotesArray[randomInteger].author)
                  
                }
                
                const quotesArray=[{quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck." , author: "Dalai Lama"},{quote: "If you can dream it, you can achieve it." , author: "Zig Zigla"},{quote: "If youre offered a seat on a rocket ship , dont ask what seat! Just get on." , author: "Sheryl Sandberg"},{quote:"We must balance conspicuous consumption with conscious capitalism.",author:"Kevin Kruse"},{quote:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{quote:"If the wind will not serve, take to the oars.",author:"Latin Proverb"}]
    return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
        <button id="new-quote" onClick={()=>getRandomQuote()}>More Quote</button>
        <p id="text">
        "{quote}"
        </p>
        <p id="author">-{author}</p>
        <a id="tweet-quote" href='http://www.twitter.com/intent/tweet' target="_blank">Tweet Quote</a>
        </div>                    
      </header>
    </div>
  );
}

export default App;
