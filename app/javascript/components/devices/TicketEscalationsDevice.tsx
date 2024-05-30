import './TicketEscalationsDevice.scss';
import React from 'react';
import {
  Card,
  List,
  Badge,
  Flex,
  FlexItem,
  SectionSeparator,
  Caption,
} from 'playbook-ui';
import TicketEscalationListItem from './TicketEscalationListItem';
import { getAvatarUrl } from '../../services/AvatarService';

const TicketEscalationsDevice = ({ ticketEscalations }) => {
  const totalEscalations = ticketEscalations.data.length;
  const escalations = ticketEscalations.data.slice(0, 6);
  const title = ticketEscalations.title;
  const colorVariant = ticketEscalations.variant;
  return (
    <>
      <Card
        className="ticket-escalations-device-container"
        padding="none"
      >
        <Flex
          justify="around"
          align="center"
          className={
            'ticket-escalations-header border-highlight-left border-color-' +
            colorVariant
          }
        >
          <FlexItem>
            <Caption>{title.toUpperCase()}</Caption>
          </FlexItem>
          {/* <div className="font-subtitle">{title.toUpperCase()}</div> */}
          {/* <div className=""> */}
          <FlexItem>
            <Badge
              text={totalEscalations}
              variant={colorVariant}
              rounded="true"
              className="ticket-escalations-header-badge"
            />
          </FlexItem>
        </Flex>
        <SectionSeparator />
        <List>
          {/* <ListItem
            className={'ticket-escalations-header border-color-' + colorVariant}
          >
            <Flex
              justify="between"
              align="center"
            >
              <FlexItem>
                <Caption>{title.toUpperCase()}</Caption>
              </FlexItem>
              {/* <div className="font-subtitle">{title.toUpperCase()}</div> */}
          {/* <div className=""> */}
          {/* </div> */}
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
        <SectionSeparator />
        {totalEscalations > 6 && (
          <Flex
            justify="center"
            align="center"
          >
            <div className="show-more">Show More</div>
          </Flex>
        )}
      </Card>
    </>
  );
};

export default TicketEscalationsDevice;
