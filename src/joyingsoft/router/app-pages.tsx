import React from 'react';
import { Home2 } from '../home/home2';
import { AppPageRouterPathType } from '../types/app-types';

export interface AppPageType {
  component: React.ReactElement;
  path: AppPageRouterPathType;
}

export const appPages: AppPageType[] = [
  {
    component: <Home2 />,
    path: '/',
  },
];
