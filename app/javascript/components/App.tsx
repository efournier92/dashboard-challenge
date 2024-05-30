import React from 'react';
import WebpackerReact from 'webpacker-react';
import NavTop from './NavTop';
import NavMain from './NavMain';
import DashboardTitle from './DashboardTitle';
import KpiDevice from './devices/KpiDevice';
import TicketEscalationsDevice from './devices/TicketEscalationsDevice';
import PipelineChartDevice from './devices/PipelineChartDevice';
import TicketMetricsDevice from './devices/TicketMetricsDevice';
import { ticketEscalations } from '../data/TicketEscalationsData';

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
            {/* TODO: Abstract to container */}
            <div className="ticket-escalations-title d-flex justify-content-center">
              THIS WEEK'S TICKET ESCALATIONS
            </div>
            <div className="row justify-content-between">
              {Object.keys(ticketEscalations).map((escalationKey) => (
                <div className="col-lg-2">
                  <TicketEscalationsDevice
                    ticketEscalations={ticketEscalations[escalationKey]}
                  />
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <PipelineChartDevice />
              </div>
              <div className="col-lg-6">
                <TicketMetricsDevice />
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
