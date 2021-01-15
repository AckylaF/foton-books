import { useEffect } from "react";
import { useDispatch } from "react-redux";
import req from "superagent";
import styled from 'styled-components';

import { ACTIONS } from "../store/actions";

import BookList from '../pages/BookList';
import Header from './Header';
import ActionButton from './Button';

const Wrapper = styled.main`
  > button{
    margin: 8rem 45% 0;
  }
`;

export default function Main({ match }) {
  const dispatch = useDispatch();

  const fetchBooks = async ( startIndex = 0) => {
    await req
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: match.params.topic })
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
  })

  let startIndex = 0;
  const findMore = () => {
    startIndex += 10;
 
    fetchBooks(startIndex);
  }

  return (
    <Wrapper>
      <Header />
      <BookList />
      <ActionButton 
        fn={findMore} 
        text={<i className="fa fa-arrow-down"></i>}
      />
    </Wrapper>
  )
}