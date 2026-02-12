import React from 'react';

const About = ({ aboutData }) => {
  return (
    <section id="about" className="about-section">
      <h2>{aboutData.title}</h2>
      <p>{aboutData.content.replace(/<br>/g, '\n')}</p>
    </section>
  );
};

export default About;