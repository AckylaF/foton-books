import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './components/Main';
import BookDetails from './components/BookDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/book/:bookId" component={BookDetails} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}