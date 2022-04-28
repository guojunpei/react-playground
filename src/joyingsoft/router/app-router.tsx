import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { appPages } from './app-pages';

export const AppRouter: FC = () => {
  return (
    <Switch>
      {appPages.map((p) => (
        <Route key={p.path} exact path={p.path}>
          {p.component}
        </Route>
      ))}
    </Switch>
  );
};
