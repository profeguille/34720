import React, { useState, useEffect } from 'react';

export default function ListadoDeProductosLayout({ productos }) {
  return (
    <div>
      <div>
        <div>{JSON.stringify(productos)}</div>
      </div>
    </div>
  );
}
