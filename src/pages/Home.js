import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 3rem;

  li {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem;
    color: #fff;
    background-color: #549ae6;
    text-transform: uppercase;
    border-radius: 50px;
    box-shadow: 0px 2px 15px -6px #212529;
  }
`

export default function Home() {
  return (
    <>
      <Header home />
      <Container>
        <section>
          <p>Search</p>
        </section>
        <span>or</span>
        <section>
          <p>Choose a starting topic</p>
          <GridContainer>
            <li>
              <Link to="/books/programming">Programming</Link>
            </li>
            <li>
              <Link to="/books/design">Design</Link>
            </li>
            <li>
              <Link to="/books/medicine">Medicine</Link>
            </li>
            <li>
              <Link to="/books/engineering">Engineering</Link>
            </li>
          </GridContainer>
        </section>
      </Container>
    </>
  )
}
