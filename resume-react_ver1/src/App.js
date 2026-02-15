import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import './assets/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      {/* 全局头部 */}
      <Header />
      
      {/* 路由容器 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* 全局页脚 */}
      <Footer />
      
      {/* 全局悬浮按钮 */}
      <BackToTop />
      <DarkModeToggle />
    </ThemeProvider>
  );
}

export default App;