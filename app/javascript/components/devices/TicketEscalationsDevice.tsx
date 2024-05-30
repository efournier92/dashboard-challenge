import './TicketEscalationsDevice.scss';
import React from 'react';
import { List, ListItem, Badge, Flex } from 'playbook-ui';
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
            padding="md"
            className={'ticket-escalations-header border-color-' + colorVariant}
          >
            <Flex
              justify="between"
              align="center"
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
            </Flex>
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
          <Flex
            className="ticket-escalations-footer"
            justify="center"
            align="center"
          >
            <div className="show-more">Show More</div>
          </Flex>
        )}
      </div>
    </>
  );
};

export default TicketEscalationsDevice;
