import { useState, useEffect } from 'react';
import req from 'superagent';

import Routes from './Routes';
import GlobalStyle from './components/GlobalStyles';

import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => { //FETCHES INITIAL LIST OF BOOKS
    await req 
      .get("https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCRiTSU_Si_zWNVrRtRPlp6UKpYmBXY3Ts")
      .then(res => setBooks(res.body.items))
      .catch(err => {
        throw err;
      })
  }
  
  useEffect(() => {
    fetchBooks();
  }, [])


  return (
    <>
      <GlobalStyle />
      <Routes books={books} />
    </>
  );
}

export default App;
