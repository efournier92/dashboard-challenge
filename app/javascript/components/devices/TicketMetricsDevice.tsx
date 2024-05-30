import React from 'react';
import { ticketMetricsData } from '../../data/TicketMetricsData';
import TicketMetricTile from '../TicketMetricTile';

const TicketMetricsDevice = () => {
  return (
    <>
      <div className="row">
        {Object.keys(ticketMetricsData).map((metric) => (
          <div className="col-6">
            <TicketMetricTile
              label={ticketMetricsData[metric].label}
              count={ticketMetricsData[metric].count}
              colorVariant={ticketMetricsData[metric].colorVariant}
              icon={ticketMetricsData[metric].icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TicketMetricsDevice;
