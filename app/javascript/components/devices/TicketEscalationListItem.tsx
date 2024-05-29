import React from 'react';
import { ListItem, User } from 'playbook-ui';

const TicketEscalationListItem = ({ avatarUrl, userName, title }) => {
  return (
    <>
      <ListItem>
        <div className="ticket-escalation-list-item d-inline-flex justify-content-between align-items-center w-100 px-3">
          <User
            size="sm"
            avatarUrl={avatarUrl}
            name={userName}
            title={title}
          />
          <i className="fas fa-chevron-right gray"></i>
        </div>
      </ListItem>
    </>
  );
};

export default TicketEscalationListItem;
