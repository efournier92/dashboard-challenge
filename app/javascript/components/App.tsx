import React from 'react';
import WebpackerReact from 'webpacker-react';
import NavTop from './NavTop';
import NavMain from './NavMain';
import DashboardTitle from './DashboardTitle';
import KpiDevice from './devices/KpiDevice';

const App = () => {
  return (
    <>
      <NavTop />
      <NavMain />
      <div className="dashboard-background">
        <DashboardTitle />
        <KpiDevice />
      </div>
    </>
  );
};

WebpackerReact.setup({ App });

export default App;
