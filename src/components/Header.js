import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  h1, i{
    font-size: 1.5rem;
  }
`;

export default function Header({ home }) {
  return (
    <Container>
      {home ? <i className="fa fa-bars"></i> : <Link to="/"><i class="fa fa-arrow-left"></i></Link>}
      <h1>Books</h1>
      <i className="fa fa-search"></i>
    </Container>
  )
}