import React, { useState, useEffect } from 'react';
import { resumeData } from './data/data';
import Header from './components/Header';
import About from './components/About';
import Hobby from './components/Hobby';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Button from './components/common/Button';
import './index.css';

function App() {
  // 暗黑模式状态管理
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 初始化时读取本地存储的暗黑模式状态
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);
  
  // 切换暗黑模式
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <div className="container" id="top">
      <Header 
        personalInfo={resumeData.personalInfo}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main>
        <About aboutData={resumeData.about} />
        <Hobby hobbyData={resumeData.hobby} />
        <Skills skillsData={resumeData.skills} />
        <Education educationData={resumeData.education} />
        <Project projectData={resumeData.projects} />
        <Contact />
      </main>
      
      <footer>
        <p>© 2026 时渝童. 保留所有权利.</p>
      </footer>
      
      {/* 返回顶部按钮 */}
      <a href="#top" className="back-to-top" aria-label="返回顶部">↑</a>
    </div>
  );
}

export default App;