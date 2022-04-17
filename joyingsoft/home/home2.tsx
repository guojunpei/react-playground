import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { appRouterPaths } from '../app-constants';
import './home2.scss';

export const Home2: FC = () => {
  return (
    <div className="home2">
      <h1>React Playground</h1>
      <nav>
        <ul>
          {appRouterPaths.map((p) => (
            <li key={p}>
              <Link to={p}>
                {(p === '/'
                  ? 'home2'
                  : ''
                ).toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
