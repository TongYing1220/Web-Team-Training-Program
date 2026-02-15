import React from 'react';
import Button from './common/Button';

const Header = ({ personalInfo, isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <h1>个人简介</h1>
      <p>{personalInfo.name}  {personalInfo.title}</p>
      
      {/* 导航 */}
      <nav className="main-nav">
        <Button className="nav-toggle" ariaLabel="打开导航菜单">
          ☰ 导航
        </Button>
        <ul className="nav-links">
          {/* 联系方式组 */}
          <li className="nav-group-title">联系方式</li>
          <li><a href={`mailto:${personalInfo.contact.email}`}>📧 邮箱</a></li>
          <li><a href={personalInfo.contact.github}>🔗 GitHub</a></li>
          <li><a href={`tel:${personalInfo.contact.phone}`}>📱 手机</a></li>
          
          {/* 分隔线 */}
          <li className="nav-divider"></li>
          
          {/* 板块导航组 */}
          <li className="nav-group-title">简历板块</li>
          <li><a href="#about">关于我</a></li>
          <li><a href="#hobby">兴趣爱好</a></li>
          <li><a href="#skills">技能</a></li>
          <li><a href="#education">教育经历</a></li>
          <li><a href="#project">项目经验</a></li>
        </ul>
      </nav>
      
      {/* 暗黑模式切换按钮 */}
      <Button 
        className="dark-mode-float" 
        ariaLabel="切换暗黑模式"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </Button>
    </header>
  );
};

export default Header;