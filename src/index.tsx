import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import './styles/app.scss';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
