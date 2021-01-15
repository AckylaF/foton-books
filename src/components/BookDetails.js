import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import ActionButton from './Button';

const GridContainer = styled.article`
  display: grid;
  grid-template-columns: 35% 60%;
  grid-gap: 10% 5%;
  margin-top: 1rem;

  img{
    width: 100%;
    box-shadow: 0px 2px 15px -2px #212529;
  }

  @media screen and (min-width: 500px){
    grid-template-columns: 25% 25%;
    grid-gap: 5% 0;
    height: 40vh;
    margin-top: 5rem;

    img{
      width: 50%;
      justify-self: center;
    }
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

  button{
    text-transform: uppercase;
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;

    button{
      margin-right: .5rem;
    }
  }
`;

const HeartIcon = styled.i`
  font-size: 1.3rem;
  color: ${props => props.liked ? 'red' : '#FFF'};
  background-color: ${props => props.liked ? '#ffffff8a' : 'red'};
  padding: .7rem;
  border-radius: 50%;
  cursor: pointer;
`;

const Description = styled.article`
  background-color: #FFF;
  width: 100vw;
  height: 50%;
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

  @media screen and (min-width: 500px){
    right: 0;
    left: unset;
    height: 80vh;
    width: 50%;
  }
`;

export default function BookDetails({ match }) {
  const book =  useSelector(state => state.books.volumes.filter(book => book.id === match.params.bookId)[0]);

  const price = book.saleInfo.saleability === 'FOR_SALE' ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.saleInfo.listPrice.amount) : 'Not for sale';
  
  const [liked, setLiked] = useState(false);

  const favorites = useSelector(state => state.likedBooks.favorites)
  
  const handleLike = () => {
    setLiked(!liked);
    localStorage.setItem('likedBooks', JSON.stringify([...favorites, book.id]));
  }

  return (
    <>
      <Header />
      <GridContainer>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <Details>
          <Title>{book.volumeInfo.title}</Title>
          <Author>by {book.volumeInfo.authors}</Author>
          <Block>
            <span>{price}</span>
          </Block>
        </Details>
        <PageCount>{book.volumeInfo.pageCount} pages</PageCount>
        <Actions>
          <ActionButton text="Buy" />
          <HeartIcon className="fa fa-heart" liked={liked} onClick={handleLike}></HeartIcon>
        </Actions>
      </GridContainer>
      <Description>
        <p>{book.volumeInfo.description}</p>
      </Description>
    </>
  )
}