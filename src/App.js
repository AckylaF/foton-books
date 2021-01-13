import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import req from "superagent";

import { ACTIONS } from "./store/actions";

import Routes from "./Routes";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  const dispatch = useDispatch();

  const query = useSelector(state => {
    if(state !== undefined) {
      return state.query
    }

    return '';
  });

  const fetchBooks = async () => {
    //FETCHES INITIAL LIST OF BOOKS
    await req
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: query || 'design' })
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
      <Routes />
    </>
  );
}

export default App;
