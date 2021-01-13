import { useEffect } from "react";
import { useDispatch } from "react-redux";
import req from "superagent";

import { ACTIONS } from "./store/actions";

import Routes from "./Routes";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  const dispatch = useDispatch();

  const fetchBooks = async (query, startIndex = 0) => {
    //FETCHES INITIAL LIST OF BOOKS
    await req
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: query || 'design' })
      .query({ startIndex })
      .query({ key: 'AIzaSyCRiTSU_Si_zWNVrRtRPlp6UKpYmBXY3Ts' })
      .then((res) =>
        dispatch({ type: ACTIONS.SET_BOOKS, books: res.body.items })
      )
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    fetchBooks();
  });

  return (
    <>
      <GlobalStyle />
      <Routes fetchMoreBooks={fetchBooks} />
    </>
  );
}

export default App;
