
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.scss'

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      const books = (await axios.get('https://gutendex.com/books/?search=berlin')).data.results;
      setBooks(books);
      console.log(`There are ${books.length} books`, books);
    })()
  }, []);

  return (
    <div className="App">
      <h1>Hi!</h1>
      {books.length > 0 ? <h2>{`There are ${books.length} books`}</h2> : <h2>Loading...</h2>}
    </div>
  )
}

export default App
