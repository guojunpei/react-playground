import React from 'react';
import { Home } from '../home/home';
import { AppPageRouterPathType } from '../types/app-types';

export interface AppPageType {
    component: React.ReactElement;
    path: AppPageRouterPathType;
  }


  export const appPages: AppPageType[] = [
    {
      component: <Home />,
      path: '/',
    },

  ];
  