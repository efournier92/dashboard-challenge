import './TicketMetricTile.scss';
import React from 'react';
import { IconCircle, Flex, Card } from 'playbook-ui';

const TicketMetricTile = ({ label, count, colorVariant, icon }) => {
  return (
    <>
      <Card className="ticket-metric-tile">
        <Flex
          align="center"
          className="col-5"
        >
          <IconCircle
            icon={icon}
            variant={colorVariant}
            size="xl"
          />
        </Flex>
        <Flex
          align="center"
          className="col-7"
        >
          <Flex orientation="column">
            <div className="ticket-metric-count">{count}</div>
            <div className="ticket-metric-label">{label}</div>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default TicketMetricTile;
