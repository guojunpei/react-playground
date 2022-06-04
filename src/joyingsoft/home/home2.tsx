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
              <a className="js-link" href="#home">
                <img src="" alt="乐软科技" />
              </a>
            </div>
            <div>
              <a className="js-link" href="#home">
                乐软
              </a>
            </div>
          </div>
          <div className="right-header-wrap">
            <div>
              <a className="js-link" href="#home">
                首页
              </a>
            </div>
            <div>
              <a className="js-link" href="#services">
                服务
              </a>
            </div>
            <div>
              <a className="js-link" href="#services">
                关于我们
              </a>
            </div>
            <div>
              <a className="js-link" href="#services">
                产品
              </a>
            </div>
            <div>
              <a className="js-link" href="#services">
                联系我们
              </a>
            </div>
            <div className="btn-lang">
              <span id="lang-en" lang="en">
                中
              </span>
              <span id="lang-zh" lang="zh">
                EN
              </span>
              <div className="btn-inner" />
            </div>
          </div>
        </div>
      </div>
      <nav />
      <div className="js-banner main-sreen">
        <div className="js-banner-content title-font-size">
          河南乐软科技有限公司
        </div>
      </div>
      <div id="services" className="main-cotent">
        <div>
          <div className="title title-font-size">服务</div>
          <hr />
        </div>
        <div className="container">
          <div className="content">
            <div>
              <img src="" alt="云方案" />
            </div>
            <div className="title-font-size">云方案</div>
            <div className="content-font-size">
              云解决方案，高可靠性，可访问性，和安全性。
            </div>
          </div>
          <div className="content">
            <div>
              <img src="" alt="跨平台" />
            </div>
            <div className="title-font-size">跨平台</div>
            <div>跨平台多种设备支持，服务随时随地可用。</div>
          </div>
          <div className="content">
            <div>
              <img src="" alt="新技术" />
            </div>
            <div className="title-font-size">新技术</div>
            <div className="content-font-size">
              不断革新，使用最新技术以产生最佳效果。
            </div>
          </div>
          <div className="content">
            <div>
              <img src="" alt="工匠心" />
            </div>
            <div className="title-font-size">工匠心</div>
            <div className="content-font-size">
              "我们乐于寻找解决方案，热爱创造高效易用的软件。"
            </div>
          </div>
        </div>
        <div>
          <a className="js-link" href="#about">
            ↓
          </a>
        </div>
      </div>
      <div id="about" className="main-cotent">
        <div>
          <div className="title title-font-size">灵活开放，合作共赢</div>
          <hr />
        </div>
        <div className="container">
          <div className="content">
            <p className="content-font-size">
              <span>
                "提供高性能，高可靠，可伸缩，灵活，安全，稳定的技术服务。"
                <br />
                "我们倡导高效务实的工作方式，敢于尝试，不断创新。"
                <br />
                "用心打造软件是一种快乐，我们希望我们的软件不但能提高您的工作效率，更能激发您在工作学习中的乐趣。"
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
