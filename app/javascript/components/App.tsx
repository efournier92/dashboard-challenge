import React from 'react';
import WebpackerReact from 'webpacker-react';
import NavTop from './NavTop';
import NavMain from './NavMain';

const App = () => {
  return (
    <>
      <NavTop />
      <NavMain />
    </>
  );
};

WebpackerReact.setup({ App });

export default App;
