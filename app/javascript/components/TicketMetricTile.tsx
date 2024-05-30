import React from 'react';
import { IconCircle } from 'playbook-ui';

const TicketMetricTile = ({ label, count, colorVariant, icon }) => {
  return (
    <>
      <div className="ticket-metric-tile device-container row">
        <div className="d-flex align-items-center col-5">
          <IconCircle
            icon={icon}
            variant={colorVariant}
            size="xl"
          />
        </div>
        <div className="d-flex align-items-center col-7">
          <div className="d-flex flex-column">
            <div className="ticket-metric-count">{count}</div>
            <div className="ticket-metric-label">{label}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketMetricTile;
