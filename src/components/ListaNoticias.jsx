import React from 'react';
import Noticia from './Noticia';
import './ListaNoticias.css';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="lista-noticias">
      {noticias.map((noticia, index) => (
        <Noticia key={index} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListaNoticias;