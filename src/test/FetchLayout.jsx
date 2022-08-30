import React, { useState, useEffect } from 'react';

export default function FetchLayout({ actividad }) {
  return (
    <div>
      {actividad.key ? (
        <div>
          <p>{actividad.activity}</p>
          <p>{actividad.type}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
