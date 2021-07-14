import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from './modules/LoginScreen';

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginScreen} />
          <Route path='/blank-page' component={() => <h1>Página em branco</h1>} />
          <Redirect to='/login' />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
