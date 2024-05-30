import './TicketEscalationsContainer.scss';
import React from 'react';
import { Flex, Layout, Caption } from 'playbook-ui';
import TicketEscalationsDevice from './devices/TicketEscalationsDevice';
import { useQuery } from '@apollo/client';
import { GET_ALL_TICKET_ESCALATIONS } from '../services/QueryService';
import { mapTicketEscalationsData } from '../services/TicketEscalationsDataMapper';

const TicketEscalationsContainer = () => {
  const getEscalationsQuery = useQuery(GET_ALL_TICKET_ESCALATIONS);

  if (getEscalationsQuery.loading) return <p>Loading...</p>;

  if (getEscalationsQuery.error)
    return <p>Error : {getEscalationsQuery.error.message}</p>;

  const ticketEscalations = mapTicketEscalationsData(
    getEscalationsQuery.data.escalations,
  );

  return (
    <>
      <div className="ticket-escalations-container">
        <Flex
          justify="center"
          className="ticket-escalations-title"
        >
          <Caption
            size="md"
            text="THIS WEEK'S TICKET ESCALATIONS"
          />
        </Flex>
        <Layout layout="kanban">
          {Object.keys(ticketEscalations).map((escalationKey, index) => (
            <Layout.Body key={index}>
              <TicketEscalationsDevice
                ticketEscalations={ticketEscalations[escalationKey]}
              />
            </Layout.Body>
          ))}
        </Layout>
      </div>
    </>
  );
};

export default TicketEscalationsContainer;
