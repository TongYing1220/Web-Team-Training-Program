import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { theme } = useTheme();
  const { addElement } = useScrollAnimation();

  return (
    <div className="container page-transition">
      <main>
        <section>
          <h2>详细介绍</h2>
          
          <div 
            className="education-card lazy-load" 
            ref={addElement}
          >
            <h3>个人背景</h3>
            <p>
              本人就读于中国科学技术大学计算机科学与技术专业，目前大二在读。
            </p>
          </div>

          <div 
            className="education-card lazy-load" 
            ref={addElement}
          >
            <h3>学习理念</h3>
            <p>
              坚持“理论+实践”结合的学习方式，不仅注重数据结构、算法等基础理论的掌握，
              更重视通过实际项目将知识落地。擅长自主学习新技术，能够快速适应不同的开发场景，
              始终保持对前端开发的热情和探索精神。
            </p>
          </div>

          <div 
            className="education-card lazy-load" 
            ref={addElement}
          >
            <h3>个人特质</h3>
            <ul>
              <li>严谨细致：编写代码注重规范和可读性，重视边界条件和异常处理</li>
              <li>团队协作：乐于分享技术，能够高效参与团队沟通和协作</li>
              <li>持续学习：主动关注行业新技术、新框架，保持技术敏感度</li>
              <li>问题解决：面对技术难题能够冷静分析，通过查阅资料、调试等方式解决问题</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};