import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerCard from './components/BeerCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => setBeers(response.data))
      .catch(error => console.error('Error fetching the beers:', error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="beer-list">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
