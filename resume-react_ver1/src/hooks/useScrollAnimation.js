import { useEffect, useRef } from 'react';

// 监听元素滚动，实现懒加载动画
export const useScrollAnimation = () => {
  const elementsRef = useRef([]);

  // 注册需要监听的元素
  const addElement = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  // 检查元素是否在视口内
  const checkIfInView = () => {
    elementsRef.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        el.classList.add('visible');
      }
    });
  };

  // 监听滚动和窗口大小变化
  useEffect(() => {
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    // 初始检查一次
    checkIfInView();

    // 清理函数
    return () => {
      window.removeEventListener('scroll', checkIfInView);
      window.removeEventListener('resize', checkIfInView);
    };
  }, []);

  return { addElement };
};