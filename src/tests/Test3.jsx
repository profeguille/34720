import React, { useContext } from 'react';
import { contexto } from '../tests/GenericContext';

export default function Test3() {
  const { color, setColor, cart, addToCart } = useContext(contexto);
  console.log('estoy en test 3 y puedo ver el carrito', cart);
  return (
    <>
      <div style={{ backgroundColor: color, border: '3px solid red', margin: '20px', padding: '20px' }}>
        LLEGO A TEST 3!!!!!
        <button
          onClick={() => {
            setColor('#0000FF');
          }}
        >
          LLAMAR A PADRE MAYOR APP!!! Y PEDIRLE QUE CAMBIE EL COLOR A TODOS
        </button>
        <button
          onClick={() => {
            addToCart({ id: 100, name: 'pelota' });
          }}
        >
          Meter una pelota al carrito
        </button>
      </div>
    </>
  );
}
