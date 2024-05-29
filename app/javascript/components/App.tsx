import React from 'react';
import WebpackerReact from 'webpacker-react';
import NavTop from './NavTop';

const App = () => {
  return (
    <>
      <NavTop />
    </>
  );
};

WebpackerReact.setup({ App });

export default App;
