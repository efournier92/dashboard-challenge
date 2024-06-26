import './TicketMetricTile.scss';
import React from 'react';
import { Flex, FlexItem, IconStatValue, Card } from 'playbook-ui';

const TicketMetricTile = ({ data }) => (
  <Card.Body
    className="ticket-metric-tile-container"
    padding="none"
  >
    <Flex
      horizontal="center"
      spacing="evenly"
      wrap
    >
      {data.map((line, i) => (
        <FlexItem
          fixedSize="215px"
          key={`grid-row-item-${line.icon}-${i}`}
          paddingTop="xl"
          className="ticket-metric-tile"
        >
          <IconStatValue {...line} />
        </FlexItem>
      ))}
    </Flex>
  </Card.Body>
);

export default TicketMetricTile;
