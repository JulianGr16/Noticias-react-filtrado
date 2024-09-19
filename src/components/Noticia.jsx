import React from 'react';
import './Noticia.css';

const Noticia = ({ noticia }) => {
  const { title, description, link, source_id } = noticia;

  return (
    <div className="noticia-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>{source_id}</strong></p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver noticia completa
      </a>
    </div>
  );
};

export default Noticia;