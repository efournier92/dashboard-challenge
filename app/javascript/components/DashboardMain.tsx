import React from 'react';
import NavTop from './NavTop';
import NavMain from './NavMain';
import DashboardTitle from './DashboardTitle';
import KpiDevice from './devices/KpiDevice';
import TicketEscalationsDevice from './devices/TicketEscalationsDevice';
import PipelineChartDevice from './devices/PipelineChartDevice';
import TicketMetricsDevice from './devices/TicketMetricsDevice';
import { ticketEscalations } from '../data/TicketEscalationsData';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../services/QueryService';

const DashboardMain = () => {
  const getCurrentUserQuery = useQuery(GET_USER_BY_ID, {
    variables: { id: 1 },
  });

  if (getCurrentUserQuery.loading) return <p>Loading...</p>;

  if (getCurrentUserQuery.error)
    return <p>Error : {getCurrentUserQuery.error.message}</p>;

  return (
    <>
      <NavTop user={getCurrentUserQuery.data.user} />
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

export default DashboardMain;
