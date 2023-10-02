import { useEffect, useState } from 'react';
import './App.scss';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';



const quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
//"Life isn't about getting and having, it's about giving and being." "Kevin Kruse"

function App() {
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
}
  useEffect(() => {
    fetchQuotes(quotesURL)
  }, )
  
  const [quotesArray, setQuotesArray] = useState(null)
  const [quote, setQuote] = useState("Life isn't about getting and having, it's about giving and being.")
  const [author, setAuthor] = useState("Kevin Kruse")
  let randomColor = colors[Math.floor(colors.length * Math.random())]
  const [accentColor, setAccentColor] = useState(randomColor)
  
  
  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
    setAccentColor(randomColor)
  }
  

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor}}>
        <div id="quote-box" style={{color: accentColor}}>
          <p id="text"><FaQuoteLeft /> {quote}</p>
          <p id="author">- {author}</p>
          <div className='buttons'>
            <a id="tweet-quote" style={{backgroundColor: accentColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} - ${author}`)} rel="noreferrer" target="_blank"><FaTwitter/></a>
            <button style={{backgroundColor: accentColor}} id="new-quote" onClick={getRandomQuote}>New Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
