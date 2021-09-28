import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import BookForm from './pages/BookForm';

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/book" component={BookForm} />
    <Route exact path="/book/:id" component={BookForm} />
  </Switch>
);

export default routes;
