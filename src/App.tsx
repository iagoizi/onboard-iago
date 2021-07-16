import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginScreen } from './modules/login';
import { NotFound } from './modules/not-found';
import { UserList } from './modules/user-list';

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginScreen} />
          <Route path='/user-list/:page' component={UserList} />
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
