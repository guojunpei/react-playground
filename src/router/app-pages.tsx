import React from 'react';
import { Calculator } from '../calculator/caculator';
import { Calculator as CalculatorV2 } from '../calculator/v2/calculator';
import { Home } from '../home/home';
import { Game } from '../react-tutorial/game';
import { ResponsiveSvg } from '../responsive-svg/responsive-svg';
import { AppPageRouterPathType } from '../types/app-types';
import { Home2 } from '../../joyingsoft/home/home2';

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
    component: <CalculatorV2 />,
    path: '/calculator2',
  },
  {
    component: <Calculator />,
    path: '/calculator',
  },
  {
    component: <Home2 />,
    path: '/home2',
  },
];
