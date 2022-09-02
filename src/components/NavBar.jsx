import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/category/vestidos">Vestidos</Link>
      <br />
      <Link to="/category/deportivo">Deportivo</Link>
      <br />
      <Link to="/product/100">Producto Destacado</Link>
      <br />
    </div>
  );
}
