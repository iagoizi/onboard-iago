import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddUser } from './modules/add-user';
import { LoginScreen } from './modules/login';
import { NotFound } from './modules/not-found';
import { UserInfo } from './modules/user-info';
import { UserList } from './modules/user-list';
import { ADD_USER_PATH, LOGIN_PATH, USERS_PATH, USER_INFO_PATH } from './utils/routes';

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={LOGIN_PATH} component={LoginScreen} />
          <Route path={`${USERS_PATH}/:page(\\d+)`} component={UserList} />
          <Route path={`${USER_INFO_PATH}/:userId(\\d+)`} component={UserInfo} />
          <Route path={ADD_USER_PATH} component={AddUser} />
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
