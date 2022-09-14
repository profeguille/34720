import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

export default function TestRenderCon() {
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setResultado(json);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) return <>Error...please try again later</>;
  return (
    <>
      <Loader isLoading={loading ? true : false} msg={loading ? 'Cargando...' : 'Listo!'} />
      {resultado.map((item) => (
        <div key={item.id} style={{ border: '2px solid red', margin: '10px' }}>
          {item.id}
          <br />
          {item.title}
          <br />
          {item.price}
          <br />
          {item.description}
          <br />
          {item.category}
          <br />
        </div>
      ))}
    </>
  );
}
