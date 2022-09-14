import React, { createContext, useState } from 'react';

export const contexto = createContext();

export default function GenericContext({ children }) {
  const [color, setColor] = useState('#00FF00');
  const [cart, setCart] = useState([]);

  //A MODO DE EJEMPLO NO USAR EN PRODUCCION
  function addToCart(product) {
    setCart([...cart, product]);
  }

  //HACERLO ASI
  /* addItem(item, quantity); // agregar cierta cantidad de un ítem al carrito
  removeItem(itemId); // Remover un item del cart por usando su id
  clear(); // Remover todos los items
  isInCart(id) => true | false; */
  //FIN HACERLO ASI

  return <contexto.Provider value={{ color, setColor, cart, addToCart }}>{children}</contexto.Provider>;
}
