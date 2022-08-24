import React, { useState, useEffect } from 'react';

export default function Producto({ item, color, consoleHolaMundo }) {
  //console.log('render producto ' + color);

  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  //montaje naciemiento
  useEffect(() => {
    console.log('se monto el componente');
  }, []);

  //cambios cualquiera
  useEffect(() => {
    //console.log('siempre que hay un render no me importa quien lo causo');
    if (contador > 5 || contador2 > 5) {
      alert('che, no sumes mas porque es mucho y esto causa problemas en el software');
    }
  });

  //cuando cambia contador
  useEffect(() => {
    console.log('siempre que cambie el contador 1');
  }, [contador]);

  //cuando cambia contador 2
  useEffect(() => {
    console.log('siempre que cambie el contador 2');
  }, [contador2]);

  //muere o desmonta el componente
  useEffect(() => {
    return () => {
      console.log('muere el componente');
    };
  }, []);

  return (
    <div style={{ backgroundColor: color, marginTop: '5px' }}>
      <h1>contador: {contador}</h1>
      <button
        onClick={() => {
          //contador = contador + 1
          setContador(contador + 1);
        }}
      >
        sumar contador 1
      </button>
      <button
        onClick={() => {
          setContador2(contador2 + 1);
        }}
      >
        sumar contador 2
      </button>
      <h2>id: {item.id}</h2>
      <h2>{item.name}</h2>
      <h2>precio ${item.price}</h2>
      <br />
    </div>
  );
}
