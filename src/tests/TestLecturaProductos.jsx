import { getDocs, collection, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export default function TestLecturaProductos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, 'products');
    getDocs(collectionRef).then((res) => {
      console.log(res.docs);

      /* let productosLimpios = [];

      res.docs.forEach((item) => {
        const objetoLimpio = { ...item.data(), id: item.id };
        productosLimpios.push(objetoLimpio);
      }); */

      let productosLimpios = res.docs.map((item) => ({ ...item.data(), id: item.id }));

      setProductos(productosLimpios);

      //const productosLimpios = res.docs
      //const miobjetos = { ...res.data(), id: res.id };
      //setProductos(miobjetos);
    });
  }, []);
  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          id: {producto.id} <br />
          name: {producto.name} <br />
          price: {producto.price} <br />
          stock: {producto.stock} <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
