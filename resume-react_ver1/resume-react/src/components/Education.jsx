import React from 'react';
import Card from './common/Card';

const Education = ({ educationData }) => {
  return (
    <section id="education" className="education-section">
      <h2>{educationData.title}</h2>
      {educationData.list.map((edu, index) => (
        <Card key={index} className="education-card">
          <h3>{edu.school}</h3>
          <p>{edu.major} | {edu.period}</p>
          <p>{edu.courses}</p>
        </Card>
      ))}
    </section>
  );
};

export default Education;