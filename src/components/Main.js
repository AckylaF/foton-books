import { useState } from "react";
import BookList from './BookList';
import Header from './Header';
import styled from 'styled-components';

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

export default function Main({ fetchMoreBooks }) {
  const [query, setQuery] = useState('');

  let startIndex = 0;
  const findMore = () => {
    startIndex += 10;

    fetchMoreBooks(query, startIndex);
  }

  return (
    <>
      <Header query={query} setQuery={setQuery} fetchBooks={fetchMoreBooks} home/>
      <BookList />
      <Button onClick={findMore}>
        <i className="fa fa-arrow-down"></i>
      </Button>
    </>
  )
}