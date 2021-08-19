import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/app-router';

const getAppBasename = (appPath = 'react-playground') =>
  window.location.pathname.includes(appPath) ? `/${appPath}` : '/';

export const App: FC = () => {
  return (
    <BrowserRouter basename={getAppBasename()}>
      <AppRouter />
    </BrowserRouter>
  );
};
