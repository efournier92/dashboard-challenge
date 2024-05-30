import React from 'react';
import { List, ListItem, Badge } from 'playbook-ui';
import TicketEscalationListItem from './TicketEscalationListItem';
import { getAvatarUrl } from '../../services/AvatarService';

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
                text={totalEscalations}
                variant={colorVariant}
                rounded="true"
                className="ticket-escalations-header-badge"
              />
            </div>
          </ListItem>
          {escalations.map((escalation) => (
            <TicketEscalationListItem
              key={escalation.id}
              userName={escalation.user.name}
              title={escalation.title}
              avatarUrl={getAvatarUrl(
                escalation.user.id,
                escalation.user.gender,
              )}
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
