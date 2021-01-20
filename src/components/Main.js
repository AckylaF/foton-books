import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { action } from 'typesafe-actions'
import Types from '../store/modules/books/types'

import BookList from '../pages/BookList'
import Header from './Header'
import ActionButton from './Button'

const Wrapper = styled.main`
  > button {
    margin: 8rem 45% 0;
  }
`

export default function Main({ match }) {
  const dispatch = useDispatch()

  const { loading } = useSelector(state => state.books)

  // eslint-disable-next-line prefer-const
  let [startIndex, setStartIndex] = useState(0)

  const findMore = () => {
    setStartIndex((startIndex += 10))
    dispatch(
      action(Types.FETCH_REQUEST, {
        query: match.params.topic,
        startIndex
      })
    )
  }

  useEffect(() => {
    dispatch(action(Types.FETCH_REQUEST, { query: match.params.topic }))
  }, [match.params.topic])

  return (
    <Wrapper>
      <Header />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <BookList />
          <ActionButton
            fn={findMore}
            text={<i className="fa fa-arrow-down" />}
          />
        </>
      )}
    </Wrapper>
  )
}
