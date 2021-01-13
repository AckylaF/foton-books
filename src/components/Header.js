import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ACTIONS } from '../store/actions';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  h1,
  i {
    font-size: 1.5rem;
  }
  form {
    position: relative;
  }
`;

const InputField = styled.input`
  font-size: 1.5rem;
  border-radius: 4px;
  padding: 0.5rem;

  position: absolute;
  right: 2rem;
  bottom: -0.5rem;

  width: ${(props) => (props.hidden ? "0" : "17rem")};
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};

  transition: 0.3s;
`;

export default function Header({ home }) {
  const dispatch = useDispatch();

  const [isSearchHidden, setIsSearchHidden] = useState(true);

  const toggleSearchArea = () => setIsSearchHidden(!isSearchHidden);

  return (
    <Container>
      {home ? (
        <i className="fa fa-bars"></i>
      ) : (
        <Link to="/">
          <i className="fa fa-arrow-left"></i>
        </Link>
      )}
      <h1>Books</h1>
      <form>
        <i className="fa fa-search" onClick={toggleSearchArea}></i>
        <label htmlFor="search"></label>
        <InputField
          type="text"
          name="search"
          id="search"
          hidden={isSearchHidden}
          onChange={(e) => dispatch({ type: ACTIONS.SET_QUERY, query: e.target.value })}
        />
      </form>
    </Container>
  );
}
