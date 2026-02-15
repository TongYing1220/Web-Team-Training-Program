import { createContext, useState, useContext, useEffect } from 'react';

// 创建主题上下文
const ThemeContext = createContext();

// 自定义Hook简化调用
export const useTheme = () => useContext(ThemeContext);

// 主题Provider组件
export const ThemeProvider = ({ children }) => {
  // 从本地存储读取主题，默认light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 切换主题（暗黑/浅色）
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 主题生效：给html根元素添加dark-mode类
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};