import { scaleFadeConfig } from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import Test2 from './Test2';
import { contexto } from '../tests/GenericContext';

export default function Test1() {
  const { color, setColor } = useContext(contexto);
  return (
    <>
      <div style={{ backgroundColor: color, border: '3px solid red', margin: '20px', padding: '20px' }}>
        Test1
        <Test2 />
      </div>
    </>
  );
}
