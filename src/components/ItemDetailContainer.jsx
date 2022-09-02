import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const { idcategory, idproduct } = useParams();

  return <div>ItemDetailContainer</div>;
}
