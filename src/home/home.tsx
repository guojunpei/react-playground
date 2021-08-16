import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { appRouterPaths } from '../app-constants';
import './home.scss';

export const Home: FC = () => {
  return (
    <div className="home">
      <h1>React Playground</h1>
      <nav>
        <ul>
          {appRouterPaths.map((p) => (
            <li key={p}>
              <Link to={p}>
                {(p === '/'
                  ? 'home'
                  : p.replace(/\\|\/|-|_/gi, ' ')
                ).toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
