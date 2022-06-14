
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.scss'

import { IBook } from './interfaces'
import { getBooks } from './bookModel'

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    (async () => {
      const rawBooks = (await axios.get('https://gutendex.com/books/?search=berlin')).data.results;

      const _books: IBook[] = getBooks(rawBooks);
      setBooks(_books);
      console.log(`There are ${rawBooks.length} books`, rawBooks);
    })()
  }, []);

  return (
    <div className="App">

      {books.length > 0
        ? <>
          <h1>{`There are ${books.length} books`}</h1>
          <ol>
            {books.map((book, index) => {
              console.log(29, book);
              return <li key={index}>{book.title} ({book.author})</li>
            })}</ol></> : <h1>Loading...</h1>}
    </div>
  )
}

export default App
