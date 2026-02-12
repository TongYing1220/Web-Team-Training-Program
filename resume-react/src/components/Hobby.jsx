import React from 'react';

const Hobby = ({ hobbyData }) => {
  return (
    <section id="hobby" className="hobby-section">
      <h2>{hobbyData.title}</h2>
      <ul className="hobby-list">
        {hobbyData.list.map((hobby, index) => (
          <li key={index}>
            <strong>{hobby.name}</strong>：{hobby.desc}
            {hobby.images.length > 0 && (
              <div className="hobby-img-container">
                {hobby.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={img} 
                    alt={hobby.name} 
                    className="hobby-img" 
                  />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hobby;