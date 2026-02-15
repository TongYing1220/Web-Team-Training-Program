import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Projects = () => {
  const { theme } = useTheme();
  const { addElement } = useScrollAnimation();
  // 模拟项目数据请求（使用本地数据）
  const [projects, setProjects] = useState([]);
  // 简化加载状态，无需复杂的 useFetch
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 模拟数据加载
  useEffect(() => {
    // 模拟接口请求延迟
    const timer = setTimeout(() => {
      try {
        // 你的真实项目数据，可按需修改
        const mockProjects = [
          {
            id: 1,
            title: "宠物管理系统",
            time: "2025.05 - 2025.06",
            desc: "使用Java构造出的宠物店管理系统",
            features: [
              "实现了管理员与用户的功能区分",
              "支持管理员管理宠物信息、账号创建与销毁",
              "实现了GUI界面"
            ]
          },
          {
            id: 2,
            title: "个人简历网站",
            time: "2026.01 - 2026.02",
            desc: "基于React开发的响应式个人简历网站",
            features: [
              "实现暗黑模式切换",
              "响应式布局适配移动端/平板/桌面端",
              "页面切换动画和滚动懒加载效果",
              "使用Context API管理全局状态"
            ]
          }
        ];
        setProjects(mockProjects);
        setLoading(false); // 加载完成
      } catch (err) {
        setError('加载项目失败，请刷新页面');
        setLoading(false);
      }
    }, 800);

    // 清理定时器，避免内存泄漏
    return () => clearTimeout(timer);
  }, []);

  // 加载中状态（简单文字提示，无需额外组件）
  if (loading) {
    return (
      <div className="container page-transition">
        <main>
          <p style={{ color: 'var(--color-secondary)', padding: '2rem', textAlign: 'center' }}>
            🌀 正在加载项目经历...
          </p>
        </main>
      </div>
    );
  }

  // 加载失败状态
  if (error) {
    return (
      <div className="container page-transition">
        <main>
          <p style={{ color: 'red', padding: '2rem', textAlign: 'center' }}>
            ❌ {error}
          </p>
        </main>
      </div>
    );
  }

  // 正常渲染项目列表
  return (
    <div className="container page-transition">
      <main>
        <section>
          <h2>项目经验</h2>
          {projects.length === 0 ? (
            <p style={{ color: 'var(--color-secondary)', padding: '1rem' }}>
              暂无项目经验，持续更新中...
            </p>
          ) : (
            projects.map(project => (
              <div 
                key={project.id} 
                className="project-card lazy-load"
                ref={addElement}
              >
                <h3>{project.title}</h3>
                <p><em>{project.time}</em></p>
                <p>{project.desc}</p>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
};