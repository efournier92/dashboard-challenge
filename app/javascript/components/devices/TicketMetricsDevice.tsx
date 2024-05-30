import React from 'react';
import { ticketMetricsData } from '../../data/TicketMetricsData';
import TicketMetricTile from '../TicketMetricTile';
import { Card } from 'playbook-ui';

const TicketMetricsDevice = () => {
  return (
    <>
      <Card>
        {Object.keys(ticketMetricsData).map((metric, index) => (
          <div key={index}>
            <TicketMetricTile
              label={ticketMetricsData[metric].label}
              count={ticketMetricsData[metric].count}
              colorVariant={ticketMetricsData[metric].colorVariant}
              icon={ticketMetricsData[metric].icon}
            />
          </div>
        ))}
      </Card>
    </>
  );
};

export default TicketMetricsDevice;
