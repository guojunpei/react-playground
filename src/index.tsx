import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import './styles/main.scss';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
