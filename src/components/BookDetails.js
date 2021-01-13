import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './Header';

const GridContainer = styled.article`
  display: grid;
  grid-template-columns: 35% 60%;
  grid-gap: 10% 5%;

  img{
    width: 100%;
    box-shadow: 0px 2px 15px -2px #212529;
  }
`;

const Details =  styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Block = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.3rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: .3rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const Author = styled.h6`
  font-size: 1rem;
  color: #ae9c34;
  font-weight: 400;
`;

const PageCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #ae9c34;
`;

const Actions = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: .8rem;
  width: 60%;
  color: #FFF;
  background-color: #549AE6;
  text-transform: uppercase;
  border-radius: 50px;
  box-shadow: 0px 2px 20px -6px #212529;
`;

const HeartIcon = styled.i`
  font-size: 1.3rem;
  color: white;
  background-color: red;
  padding: .7rem;
  border-radius: 50%;
`;

const Description = styled.article`
  background-color: #FFF;
  width: 100vw;
  height: 55%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem;
  overflow-y: scroll;

  p{
    color: #7a7c7f;
    line-height: 2rem;
    font-size: 1.1rem;
    text-align: justify;
  }
`;

export default function BookDetails({ match }) {
  const book =  useSelector(state => {
    if (state !== undefined) {
      return state.books.filter(book => book.id === match.params.bookId)[0];
    }

    return {};
  });

  const price = book.saleInfo.saleability === 'FOR_SALE' ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.saleInfo.listPrice.amount) : 'Not for sale';

  return (
    <>
      <Header />
      <GridContainer>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <Details>
          <Title>{book.volumeInfo.title}</Title>
          <Author>by {book.volumeInfo.authors[0]}</Author>
          <Block>
            <span>{price}</span>
          </Block>
        </Details>
        <PageCount>{book.volumeInfo.pageCount} pages</PageCount>
        <Actions>
          <Button>Buy</Button>
          <HeartIcon className="fa fa-heart"></HeartIcon>
        </Actions>
      </GridContainer>
      <Description>
        <p>{book.volumeInfo.description}</p>
      </Description>
    </>
  )
}