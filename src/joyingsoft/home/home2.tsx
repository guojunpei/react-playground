import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
// import { appRouterPaths } from '../app-constants';
import './home2.scss';

export const Home2: FC = () => {
  return (
    <div className="home2">
      <div className="main-header">
        <div className="header-wrap">
          <div className="left-header-wrap">
            <div>
              <img src="" alt="乐软科技" />
            </div>
            <div>乐软</div>
          </div>
          <div className="right-header-wrap">
            <div>首页</div>
            <div>服务</div>
            <div>关于我们</div>
            <div>产品</div>
            <div>联系我们</div>
            <div className="btn-lang">
              <span lang="en">中</span>
              <span lang="zh">EN</span>
              <div className="btn-inner" />
            </div>
          </div>
        </div>
      </div>
      <nav />
      <div className="js-banner">
        <div className="js-banner-content title-font-size">
          河南乐软科技有限公司
        </div>
      </div>
      <div id="services">
        <div className="title title-font-size">服务</div>
        <div className="container">
          <div className="content">
            <div>png</div>
            <div>云方案</div>
            <div>云解决方案，高可靠性，可访问性，和安全性。</div>
          </div>
          <div className="content">
            <div>png</div>
            <div>跨平台</div>
            <div>跨平台多种设备支持，服务随时随地可用。</div>
          </div>
          <div className="content">
            <div>png</div>
            <div>新技术</div>
            <div>不断革新，使用最新技术以产生最佳效果。</div>
          </div>
          <div className="content">
            <div>png</div>
            <div>工匠心</div>
            <div>我们乐于寻找解决方案，热爱创造高效易用的软件。</div>
          </div>
        </div>
      </div>
    </div>
  );
};
