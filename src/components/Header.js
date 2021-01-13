import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  grid-row-gap: .5rem;
  justify-items: center;

  overflow: hidden;
  height: ${props => props.isSearchHidden ? '2rem' : 'unset'};
  transition: .25s;

  h1, i {
    font-size: 1.5rem;
  }
  i.fa-bars, > a {
    justify-self: start;
  }
  i.fa-search{
    justify-self: end;
  }
  form {
    grid-area: 2/1/2/4;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`;

const InputField = styled.input`
  font-size: 1.3rem;
  border-radius: 4px;
  padding: 0.5rem;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: .8rem;
  color: #FFF;
  background-color: #549AE6;
  text-transform: uppercase;
  border-radius: 50px;
  box-shadow: 0px 2px 15px -6px #212529;
`;

export default function Header({ home, query, setQuery, fetchBooks }) {
  const [isSearchHidden, setIsSearchHidden] = useState(true);

  return (
    <Container isSearchHidden={isSearchHidden}>
      {home ? (
        <i className="fa fa-bars"></i>
      ) : (
        <Link to="/">
          <i className="fa fa-arrow-left"></i>
        </Link>
      )}
      <h1>Books</h1>
      <i className="fa fa-search" onClick={() => setIsSearchHidden(!isSearchHidden)}></i>
      <form>
        <label htmlFor="search"></label>
        <InputField
          type="text"
          name="search"
          id="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" onClick={(e) => {e.preventDefault(); fetchBooks(query)}}>
          Go!
        </Button>
      </form>
    </Container>
  );
}
