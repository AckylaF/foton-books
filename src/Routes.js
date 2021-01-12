import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import BookDetails from './components/BookDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route exact path={`/:bookId`} component={BookDetails} />
      </Switch>
    </BrowserRouter>
  )
}