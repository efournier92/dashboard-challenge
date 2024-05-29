import React from 'react';
import { List, ListItem, Badge, User } from 'playbook-ui';
import TicketEscalationListItem from './TicketEscalationListItem';

const TicketEscalationsDevice = ({ ticketEscalations }) => {
  const totalEscalations = ticketEscalations.data.length;
  const escalations = ticketEscalations.data.slice(0, 6);
  const title = ticketEscalations.title;
  const colorVariant = ticketEscalations.variant;
  return (
    <>
      <div className="ticket-escalations-device-container">
        <List>
          <ListItem
            className={
              'ticket-escalations-header d-flex justify-content-between align-items-center px-3 border-color-' +
              colorVariant
            }
          >
            <div className="font-subtitle">{title.toUpperCase()}</div>
            <div className="">
              <Badge
                text={escalations.length}
                variant={colorVariant}
                rounded="true"
                className="ticket-escalations-header-badge"
              />
            </div>
          </ListItem>
          {escalations.map((escalation) => (
            <TicketEscalationListItem
              key={escalation.id}
              avatarUrl={escalation.avatarUrl}
              userName={escalation.userName}
              title={escalation.title}
            />
          ))}
        </List>
        {totalEscalations > 6 && (
          <ListItem className="ticket-escalations-footer d-flex justify-content-center align-items-center">
            <div className="show-more">Show More</div>
          </ListItem>
        )}
      </div>
    </>
  );
};

export default TicketEscalationsDevice;
