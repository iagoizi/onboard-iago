import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Blank } from './modules/Blank';
import { LoginScreen } from './modules/LoginScreen';
import { NotFound } from './modules/NotFound';

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginScreen} />
          <Route path='/blank-page' component={Blank} />
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
