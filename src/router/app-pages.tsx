import React from 'react';
import { Home } from '../home/home';
import { Game } from '../react-tutorial/game';
import { ResponsiveSvg } from '../responsive-svg/responsive-svg';
import { AppPageRouterPathType } from '../types/app-types';

export interface AppPageType {
  component: React.ReactElement;
  path: AppPageRouterPathType;
}

export const appPages: AppPageType[] = [
  {
    component: <ResponsiveSvg />,
    path: '/responsive-svg',
  },
  {
    component: <Home />,
    path: '/',
  },
  {
    component: <Game />,
    path: '/game',
  },
  {
    component: <Caculator />,
    path: '/caculator',
  },
];
