import React, { useState, useEffect } from 'react';

import {
  getSomething
} from '../api';

import {
  Products
} from '.';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getSomething()
      .then(response => {
        setMessage(response.message);
      })
      .catch(error => {
        setMessage(error.message);
      });
  });

  return (
    <>
      <h1>Hello, World!</h1>
      <h2>{ message }</h2>
      <Products/>
    </>
  );
}

export default App;