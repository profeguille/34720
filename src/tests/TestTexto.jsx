import React, { memo, useState, useEffect } from 'react';

export default memo(function TestTexto({ msg }) {
  console.log('render del hijo');
  return <div>{msg && msg}</div>;
});
