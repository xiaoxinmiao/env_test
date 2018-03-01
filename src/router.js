import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TestEnvComponent from './components/Test/TestEnv'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={TestEnvComponent} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
