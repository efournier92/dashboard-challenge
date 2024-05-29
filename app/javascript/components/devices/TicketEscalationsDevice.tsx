import React from 'react';
import { List, ListItem, Badge, User } from 'playbook-ui';
import TicketEscalationListItem from './TicketEscalationListItem';

const TicketEscalationsDevice = () => {
  const escalationData = [
    {
      id: 0,
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      userName: 'Tina Black',
      title: 'Missing part',
    },
    {
      id: 1,
      avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
      userName: 'Rachel White',
      title: 'Not perform...',
    },
    {
      id: 2,
      avatarUrl: 'https://randomuser.me/api/portraits/women/46.jpg',
      userName: 'Jenny Green',
      title: 'Missing part',
    },
    {
      id: 3,
      avatarUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
      userName: 'Nicki Pink',
      title: 'Missing part',
    },
    {
      id: 4,
      avatarUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
      userName: 'Bailey Blue',
      title: 'Unexpected...',
    },
    {
      id: 5,
      avatarUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
      userName: 'Nicki Pink',
      title: 'Not Techn...',
    },
    {
      id: 6,
      avatarUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
      userName: 'Bailey Blue',
      title: 'Missing part',
    },
  ];

  return (
    <>
      <div className="device-container">
        <List className="">
          <ListItem className="ticket-escalations-header d-flex justify-content-between align-items-center px-3">
            <div className="font-subtitle">{'NEW'}</div>
            <div className="">
              <Badge
                text="25"
                variant="info"
                rounded="true"
                className="ticket-escalations-header-badge"
              />
            </div>
          </ListItem>
          {escalationData.map((escalation) => (
            <TicketEscalationListItem
              key={escalation.id}
              avatarUrl={escalation.avatarUrl}
              userName={escalation.userName}
              title={escalation.title}
            />
          ))}
        </List>
        {escalationData.length > 6 && (
          <ListItem className="ticket-escalations-footer d-flex justify-content-center align-items-center">
            <div className="show-more">Show More</div>
          </ListItem>
        )}
      </div>
    </>
  );
};

export default TicketEscalationsDevice;
