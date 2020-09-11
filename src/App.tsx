
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { ViewDashboard } from '@ini-admin/views';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ViewDashboard } />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App);
