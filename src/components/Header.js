/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import ActionButton from './Button'

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  grid-row-gap: 0.5rem;
  justify-items: center;

  overflow: hidden;
  height: ${props => (props.isSearchHidden ? '2rem' : 'unset')};
  transition: 0.25s;

  h1,
  i {
    font-size: 1.5rem;
  }
  i.fa-bars,
  i.fa-arrow-left {
    justify-self: start;
  }
  i.fa-search {
    justify-self: end;
  }
  form {
    grid-area: 2/1/2/4;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    i,
    button {
      cursor: pointer;
    }
  }
`

const InputField = styled.input`
  font-size: 1.3rem;
  border-radius: 4px;
  padding: 0.5rem;
`

export default function Header({ home }) {
  const history = useHistory()

  const [isSearchHidden, setIsSearchHidden] = useState(true)

  const [query, setQuery] = useState('')

  return (
    <Container isSearchHidden={isSearchHidden}>
      {home ? (
        <i className="fa fa-bars" />
      ) : (
        <i className="fa fa-arrow-left" onClick={history.goBack} />
      )}
      <h1>Books</h1>
      <i
        className="fa fa-search"
        onClick={() => setIsSearchHidden(!isSearchHidden)}
      />
      <form>
        <label htmlFor="search" />
        <InputField
          type="text"
          name="search"
          id="search"
          onChange={e => setQuery(e.target.value)}
        />
        <ActionButton
          type="submit"
          fn={e => {
            e.preventDefault()
            history.push(`/books/${query}`)
          }}
          text="Go!"
        />
      </form>
    </Container>
  )
}
