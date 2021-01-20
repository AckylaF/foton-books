import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 5%;
  margin-top: 2rem;

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-gap: 5% 2%;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
    grid-gap: 5% 2%;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

function RenderBook({ books }) {
  return books.map(book => (
    <li key={book.id}>
      <Link to={`/book/${book.id}`}>
        <Image
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
        />
      </Link>
    </li>
  ))
}

export default function BookList() {
  const { volumes } = useSelector(state => state.books)

  return (
    <GridContainer>
      <RenderBook books={volumes} />
    </GridContainer>
  )
}
