import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ onSelectCategory, onSelectCountry }) => {
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState(''); // Nuevo estado para el país

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onSelectCategory(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    onSelectCountry(e.target.value);
  };

  return (
    <div className="formulario">
      <div>
        <label htmlFor="categoria">Buscar por categoría: </label>
        <select id="categoria" value={category} onChange={handleCategoryChange}>
          <option value="">Seleccione una categoría</option>
          <option value="business">Negocios</option>
          <option value="entertainment">Entretenimiento</option>
          <option value="health">Salud</option>
          <option value="science">Ciencia</option>
          <option value="sports">Deportes</option>
          <option value="technology">Tecnología</option>
        </select>
      </div>
      <div>
        <label htmlFor="pais">Buscar por país: </label>
        <select id="pais" value={country} onChange={handleCountryChange}>
          <option value="">Seleccione un país</option>
          <option value="us">Estados Unidos</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="es">España</option>
          <option value="fr">Francia</option>
        </select>
      </div>
    </div>
  );
};

export default Formulario;