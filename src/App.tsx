
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

      {books.length > 0
        ? <>
          <h1>{`There are ${books.length} books`}</h1>
          <ol>
            {books.map((book) => {
              return <li>{book.title} ({book.authors ? book.authors[0].name : 'unknown'})</li>
            })}</ol></> : <h1>Loading...</h1>}
    </div>
  )
}

export default App
