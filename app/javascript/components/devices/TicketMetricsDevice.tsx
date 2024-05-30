import React from 'react';
import { ticketMetricsData } from '../../data/TicketMetricsData';
import TicketMetricTile from '../TicketMetricTile';
import { Card, SectionSeparator } from 'playbook-ui';

const TicketMetricsDevice = () => {
  return (
    <>
      <Card
        borderNone
        marginLeft="sm"
        padding="none"
        shadow="deeper"
      >
        <TicketMetricTile data={ticketMetricsData.slice(0, 2)} />
        <SectionSeparator orientation="horizontal" />
        <TicketMetricTile data={ticketMetricsData.slice(2)} />
      </Card>
    </>
  );
};

export default TicketMetricsDevice;
