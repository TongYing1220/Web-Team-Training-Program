import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Home = () => {
  const { theme } = useTheme();
  const { addElement } = useScrollAnimation();

  // 技能进度条动画
  useEffect(() => {
    // 模拟技能熟练度
    const skills = [
      { id: 'c', value: 80 },
      { id: 'cpp', value: 75 },
      { id: 'java', value: 70 },
      { id: 'git', value: 65 },
      { id: 'ps', value: 85 },
    ];

    // 延迟加载进度条动画
    setTimeout(() => {
      skills.forEach(skill => {
        const bar = document.getElementById(`progress-${skill.id}`);
        const value = document.getElementById(`value-${skill.id}`);
        if (bar && value) {
          bar.style.width = `${skill.value}%`;
          value.textContent = `${skill.value}%`;
        }
      });
    }, 500);
  }, []);

  return (
    <div className="container page-transition">
      <main>
        {/* 个人简介 */}
        <section>
          <h2>关于我</h2>
          <p>
            大学计算机专业大二学生，热衷前端开发。课堂夯实数据结构等专业基础，<br/>
            课后深耕C、C++、Java等编程语言，通过线上课程补充工程化知识。<br/>
            性格严谨，注重代码质量与用户体验，擅长独立解决技术问题，也乐于团队合作。<br/>
            计划通过更多实战提升协作与复杂应用开发能力。
          </p>
        </section>

        {/* 兴趣爱好 */}
        <section>
          <h2>兴趣爱好</h2>
          <ul className="hobby-list">
            <li>
              <strong>绘画</strong>：水彩，电子绘画
              <div className="hobby-img-container">
                <img 
                  src="/images/D238ECF50E1C4631092C65B99BC420AA.jpg" 
                  alt="水彩画" 
                  className="hobby-img"
                />
                <img 
                  src="/images/psc.webp" 
                  alt="电子绘画" 
                  className="hobby-img"
                />
              </div>
            </li>
            <li><strong>书法</strong>：软笔，硬笔</li>
            <li><strong>游戏</strong>：崩坏：星穹铁道、绝区零</li>
          </ul>
        </section>

        {/* 技能 */}
        <section>
          <h2>技能</h2>
          <div className="skills-grid">
            <div className="skill-card lazy-load" ref={addElement}>
              <h3>编程 💻</h3>
              <div className="skill-progress">
                <div id="progress-c" className="progress-bar"></div>
                <span id="value-c" className="skill-value">0%</span>
              </div>
              <p>C 语言</p>
              
              <div className="skill-progress">
                <div id="progress-cpp" className="progress-bar"></div>
                <span id="value-cpp" className="skill-value">0%</span>
              </div>
              <p>C++</p>
              
              <div className="skill-progress">
                <div id="progress-java" className="progress-bar"></div>
                <span id="value-java" className="skill-value">0%</span>
              </div>
              <p>Java</p>
            </div>

            <div className="skill-card lazy-load" ref={addElement}>
              <h3>工具 🚀</h3>
              <div className="skill-progress">
                <div id="progress-git" className="progress-bar"></div>
                <span id="value-git" className="skill-value">0%</span>
              </div>
              <p>Git, VS Code</p>
            </div>

            <div className="skill-card lazy-load" ref={addElement}>
              <h3>设计 ✨</h3>
              <div className="skill-progress">
                <div id="progress-ps" className="progress-bar"></div>
                <span id="value-ps" className="skill-value">0%</span>
              </div>
              <p>Photoshop，画世界pro</p>
            </div>
          </div>
        </section>

        {/* 教育经历 */}
        <section>
          <h2>教育经历</h2>
          <div className="education-card lazy-load" ref={addElement}>
            <h3>中国科学技术大学</h3>
            <p>计算机科学与技术 | 2024 - 至今</p>
            <p>主修课程：数据结构、算法、图论</p>
          </div>
        </section>
      </main>
    </div>
  );
};