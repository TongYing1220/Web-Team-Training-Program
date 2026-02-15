import React, { useEffect, useRef } from 'react';
import Card from './common/Card';

const Project = ({ projectData }) => {
  const projectSectionRef = useRef(null);
  
  // 项目卡片懒加载
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const delay = parseInt(card.dataset.delay) || 0;
          
          setTimeout(() => {
            card.classList.add('visible');
          }, delay);
          
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.1 });
    
    const cards = projectSectionRef.current?.querySelectorAll('.lazy-load');
    if (cards) {
      cards.forEach(card => observer.observe(card));
    }
    
    return () => {
      if (cards) {
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="project" className="project-section" ref={projectSectionRef}>
      <h2>{projectData.title}</h2>
      {projectData.list.map((project, index) => (
        <Card 
          key={index} 
          className="project-card" 
          lazyLoad={true}
          delay={project.delay}
        >
          <div className="project-card-content">
            <h3>{project.name}</h3>
            <p><em>{project.period}</em></p>
            <p>{project.desc}</p>
            <ul>
              {project.features.map((feature, fIndex) => (
                <li key={fIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default Project;