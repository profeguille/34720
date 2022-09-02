import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productosHC = [
  { id: 100, name: 'pelota boca juniors', precio: 100, idcategory: 'deportivo' },
  { id: 101, name: 'pelota de river', precio: 5, idcategory: 'deportivo' },
  { id: 102, name: 'botines de tigre', precio: 50, idcategory: 'deportivo' },
  { id: 103, name: 'vestido LOla', precio: 100, idcategory: 'vestidos' },
];

export default function ItemListContainer() {
  const { idcategory, idproduct } = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    if (!idcategory) {
      //HOME
      setProducts(productosHC);
    } else {
      //EN UNA CATEGORIA PUNTUAL
      setProducts(productosHC.filter((product) => product.idcategory == idcategory));
    }
  }, [idcategory]);

  return (
    <>
      <div>{JSON.stringify(products)}</div>
    </>
  );
}
