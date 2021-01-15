import { useEffect } from "react";
import { useDispatch } from "react-redux";
import req from "superagent";
import styled from 'styled-components';

import { ACTIONS } from "../store/actions";

import BookList from '../pages/BookList';
import Header from './Header';

const Button = styled.button`
  color: #FFF;
  background-color: #549AE6;
  border-radius: 50%;
  font-size: 1rem;
  position: absolute;
  bottom: .5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: .8rem;
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
    <>
      <Header />
      <BookList />
      <Button onClick={findMore}>
        <i className="fa fa-arrow-down"></i>
      </Button>
    </>
  )
}