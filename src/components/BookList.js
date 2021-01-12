import styled from 'styled-components';
import { Link } from 'react-router-dom';


const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 5%;

  li{
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function RenderBook({ books }) {
  return (
    books.map(book => (
      <Link to={`/book/${book.id}`}>
        <li key={book.id}>
          <Image src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
        </li>
      </Link>
    ))
  )
}

export default function BookList({ books }) {
  return (
    <GridContainer>
      <RenderBook books={books} />
    </GridContainer>
  )
}