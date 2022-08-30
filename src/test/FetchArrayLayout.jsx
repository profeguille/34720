import React, { useState, useEffect } from 'react';
import FetchArrayPoke from './FetchArrayPoke';

export default function FetchArrayLayout({ arrayPokes }) {
  return (
    <>
      {arrayPokes.map((poke) => (
        <FetchArrayPoke poke={poke} />
      ))}
    </>
  );
}
