import React, { useState, useEffect } from 'react';
import TestTexto from './TestTexto';

export default function TestRenderMultiple() {
  const [email, setEmail] = useState('');
  console.log('render del padre');
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <TestTexto msg={'cualquier string para mostrar'} />
    </div>
  );
}
