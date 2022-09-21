import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Comprar() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');

  const [idCompra, setIdCompra] = useState('');
  const [cartelito, setCartelito] = useState('');

  const [apagarBoton, setApagarBoton] = useState(false);

  function terminarCompra() {
    if (!nombre || !tel || !email) {
      setCartelito('Che! controla que hayas puesto bien tu nombre, tel , email.');
      return;
    }

    setApagarBoton(true);

    let order = {
      buyer: { name: nombre, phone: tel, email: email },
      carrito: [
        { id: '81ASqxXumlIHvIKgfGQ7', title: 'vestido violeta', price: 300, cant: 10 },
        { id: '4O8itZUuzrCwUMG0FSuR', title: 'pelota', price: 100, cant: 1 },
      ],
      total: 3100,
    };
    const db = getFirestore();
    const miColleccion = collection(db, 'orders');
    addDoc(miColleccion, order)
      .then(({ id }) => {
        setIdCompra(id);
      })
      .catch((e) => {
        setApagarBoton(false);
      });
  }

  return (
    <div>
      {cartelito && 'ERROR: ' + cartelito}
      <br />
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="ingrese su nombre" type={'text'} />
      <br />
      <input value={tel} onChange={(e) => setTel(e.target.value)} placeholder="ingrese su telefono" type={'text'} />
      <br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ingrese su email" type={'text'} />
      <br />
      {!idCompra ? !apagarBoton ? <button onClick={terminarCompra}>TERMINAR COMPRA</button> : 'Loading' : <p>Gracias por tu compra. Tu numero de ticket es: {idCompra}</p>}
      <br />
    </div>
  );
}
