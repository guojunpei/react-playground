import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/app-router';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
