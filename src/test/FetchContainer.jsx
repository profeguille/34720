import React, { useState, useEffect } from 'react';
import FetchLayout from './FetchLayout';

export default function FetchContainer() {
  const [actividad, setActividad] = useState({});
  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
      .then((res) => res.json())
      .then((json) => {
        setActividad(json);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log('lo ultimo que hago'));
  }, []);
  return <FetchLayout actividad={actividad} />;
}
