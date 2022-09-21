import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export default function TestLecturaProducto() {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    const db = getFirestore();
    const productoRef = doc(db, 'products', '81ASqxXumlIHvIKgfGQ7');
    getDoc(productoRef).then((res) => {
      const miobjeto = { ...res.data(), id: res.id };
      setProducto(miobjeto);
    });
  }, []);
  return (
    <div>
      id: {producto.id} <br />
      name: {producto.name} <br />
      price: {producto.price} <br />
      stock: {producto.stock} <br />
      <br />
      <br />
    </div>
  );
}
