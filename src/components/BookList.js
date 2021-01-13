import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 5%;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function RenderBook({ books }) {
  return books.map((book) => (
    <li key={book.id}>
      <Link to={`/book/${book.id}`}>
        <Image
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
        />
      </Link>
    </li>
  ));
}

export default function BookList() {
  const books = useSelector(state => {
    if (state !== undefined) {
      return state.books;
    }

    return Array(0);
  });

  return (
    <GridContainer>
      <RenderBook books={books} />
    </GridContainer>
  );
}
