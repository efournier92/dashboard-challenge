import React from 'react';
import WebpackerReact from 'webpacker-react';
import NavTop from './NavTop';
import NavMain from './NavMain';
import DashboardTitle from './DashboardTitle';
import KpiDevice from './devices/KpiDevice';
import TicketEscalationsDevice from './devices/TicketEscalationsDevice';

const App = () => {
  return (
    <>
      <NavTop />
      <NavMain />
      <div className="dashboard-background">
        <div className="w-100">
          <div className="w-75 m-auto">
            <DashboardTitle />
            <KpiDevice />
            <div className="row">
              <div className="col-3">
                <TicketEscalationsDevice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WebpackerReact.setup({ App });

export default App;
