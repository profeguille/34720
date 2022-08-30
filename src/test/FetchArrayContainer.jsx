import React, { useState, useEffect } from 'react';
import FetchArrayLayout from './FetchArrayLayout';

export default function FetchArrayContainer() {
  const [arrayPokes, setArrayPokes] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((json) => {
        setArrayPokes(json.results);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log('lo ultimo que hago'));
  }, []);
  return <FetchArrayLayout arrayPokes={arrayPokes} />;
}
