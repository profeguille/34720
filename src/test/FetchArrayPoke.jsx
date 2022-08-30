import React, { useState, useEffect } from 'react';

export default function FetchArrayPoke({ poke }) {
  return (
    <div>
      {JSON.stringify(poke)}
      <br />
    </div>
  );
}
