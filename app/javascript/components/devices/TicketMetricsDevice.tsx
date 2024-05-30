import React from 'react';
import { ticketMetricsData } from '../../data/TicketMetricsData';
import TicketMetricTile from '../TicketMetricTile';
import { Card, SectionSeparator } from 'playbook-ui';

const TicketMetricsDevice = () => {
  return (
    <>
      <Card
        borderNone
        margin="sm"
        padding="none"
        shadow="deeper"
      >
        <TicketMetricTile data={ticketMetricsData.slice(0, 2)} />
        <SectionSeparator orientation="horizontal" />
        <TicketMetricTile data={ticketMetricsData.slice(2)} />
      </Card>
      {/* <Layout
        layout="collection"
        flex="6"
      >
        <Layout.Body>
          {Object.keys(ticketMetricsData).map((metric, index) => (
            <TicketMetricTile
              key={index}
              label={ticketMetricsData[metric].label}
              count={ticketMetricsData[metric].count}
              colorVariant={ticketMetricsData[metric].colorVariant}
              icon={ticketMetricsData[metric].icon}
            />
          ))}
        </Layout.Body>
      </Layout> */}
    </>
  );
};

export default TicketMetricsDevice;
