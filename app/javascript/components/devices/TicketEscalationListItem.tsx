import React from 'react';
import { ListItem, User, Flex } from 'playbook-ui';

const TicketEscalationListItem = ({ avatarUrl, userName, title }) => {
  return (
    <>
      <ListItem className="w-100">
        <Flex
          justify="around"
          align="center"
          padding="none"
          className="ticket-escalation-list-item w-100"
        >
          <User
            size="sm"
            avatarUrl={avatarUrl}
            name={userName}
            title={title}
          />
          <i className="fas fa-chevron-right gray"></i>
        </Flex>
      </ListItem>
    </>
  );
};

export default TicketEscalationListItem;
