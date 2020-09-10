import React from 'react'
import {Switch, Route} from 'react-router-dom'

const NotFound = () => <h1>Not Found</h1>;

const Layouts = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/app" component={AppLayout} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}

export default Layouts