import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Main from './components/Main'
import BookDetails from './components/BookDetails'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books/:topic" component={Main} />
        <Route exact path="/book/:bookId" component={BookDetails} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
