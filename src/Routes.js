import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './components/Main';
import BookDetails from './components/BookDetails';

export default function Routes({ books }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Main books={books} />} />
        <Route exact path="/book/:bookId" component={({ match }) => <BookDetails book={books.filter(book => book.id === match.params.bookId)[0]} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}