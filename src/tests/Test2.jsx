import { scaleFadeConfig } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Test3 from './Test3';

export default function Test2() {
  return (
    <>
      <div style={{ /* backgroundColor: color, */ border: '3px solid red', margin: '20px', padding: '20px' }}>
        Test2
        <Test3 />
        <Test3 />
        <Test3 />
      </div>
    </>
  );
}
