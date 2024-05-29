import React from 'react';
import WebpackerReact from 'webpacker-react';
import NavTop from './NavTop';
import NavMain from './NavMain';
import DashboardTitle from './DashboardTitle';

const App = () => {
  return (
    <>
      <NavTop />
      <NavMain />
      <div className="dashboard-background">
        <DashboardTitle />
      </div>
    </>
  );
};

WebpackerReact.setup({ App });

export default App;
