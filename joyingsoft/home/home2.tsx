import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { appRouterPaths } from '../app-constants';
import './home2.scss';

export const Home2: FC = () => {
  return (
    <div className="home2">
      <div className='main-header'>
        <div className='header-wrap'>
          <div className='left-header-wrap'>
            <div>
              <img src="" alt="乐软科技" />
            </div>
            <div>乐软</div>
          </div>
          <div className='right-header-wrap'>
            <div>首页</div>
            <div>服务</div>
            <div>关于我们</div>
            <div>产品</div>
            <div>联系我们</div>
            <div>EN</div>
          </div>
        </div>
      </div>
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
      <h1>about</h1>
      <div> about content</div>
      <h1>content 1</h1>
      <div> content 1 content</div>
    </div>
  );
};
