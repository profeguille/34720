import React, { useState, useEffect } from 'react';

export default function Promesas() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let promesaProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 100, name: 'zapato nike', price: 100 },
          { id: 101, name: 'cartera nike', price: 150 },
          { id: 102, name: 'pelota adidas', price: 200 },
        ]);
      }, 2000);
    });

    promesaProductos
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p>Loading: {loading ? 'Loading...' : 'fin'}</p>
      <p>Error: {error ? error : null}</p>
      {productos.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
