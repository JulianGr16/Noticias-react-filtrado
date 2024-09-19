import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import './App.css';

const API_KEY = 'pub_53811818a907cd3757c64cf3d6c1821f03745';  
const API_URL = 'https://newsdata.io/api/1/news';

function App() {
 

  return 
    const [category, setCategory] = useState('');
  const [country, setCountry] = useState(''); 
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    if (category && country) { 
      fetch(`${API_URL}?category=${category}&country=${country}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setNoticias(data.results);
        });
    }
  }, [category, country]); 

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <div className="app">
      <Titulo />
      <Formulario onSelectCategory={handleCategorySelect} onSelectCountry={handleCountrySelect} />
      <ListaNoticias noticias={noticias} />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));

export default App
