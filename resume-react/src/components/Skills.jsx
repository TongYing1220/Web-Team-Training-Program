import React, { useEffect, useRef } from 'react';
import Card from './common/Card';

const Skills = ({ skillsData }) => {
  const skillSectionRef = useRef(null);
  
  // 技能进度条动画
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          const skillValues = entry.target.querySelectorAll('.skill-value');
          
          progressBars.forEach((bar, index) => {
            const value = parseInt(bar.dataset.value);
            bar.style.width = `${value}%`;
            
            // 数字动画
            let currentValue = 0;
            const speed = 20;
            const timer = setInterval(() => {
              currentValue++;
              skillValues[index].textContent = `${currentValue}%`;
              if (currentValue >= value) clearInterval(timer);
            }, speed);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }
    
    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillSectionRef}>
      <h2>{skillsData.title}</h2>
      <div className="skills-grid">
        {skillsData.list.map((skill, index) => (
          <Card key={index} className="skill-card">
            <h3 dangerouslySetInnerHTML={{ __html: skill.name }}></h3>
            <div className="skill-progress">
              <div className="progress-bar" data-value={skill.value}></div>
              <span className="skill-value">0%</span>
            </div>
            <p>{skill.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;