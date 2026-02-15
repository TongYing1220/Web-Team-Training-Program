import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header>
      <h1>个人简介</h1>
      <p>时渝童  中国科学技术大学大二在读学生</p>
      
      {/* 导航栏 */}
      <nav className="main-nav">
        <button className="nav-toggle" aria-expanded="false">
          ☰ 导航
        </button>
        <ul className="nav-links">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于我</Link></li>
          <li><Link to="/projects">项目经验</Link></li>
          <li><Link to="/contact">联系我</Link></li>
          <li className="nav-divider"></li>
          <li><a href="mailto:syt2108155403@mail.ustc.edu.cn">📧 邮箱</a></li>
          <li><a href="https://github.com/TongYing1220">🔗 GitHub</a></li>
          <li><a href="tel:18788844759">📱 手机</a></li>
        </ul>
      </nav>
    </header>
  );
};