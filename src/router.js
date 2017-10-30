import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import home from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/indexPage" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
