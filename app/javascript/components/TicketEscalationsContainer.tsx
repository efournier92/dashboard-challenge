import React from 'react';
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

  debugger;

  return (
    <>
      <div className="ticket-escalations-container">
        <div className="ticket-escalations-title d-flex justify-content-center">
          THIS WEEK'S TICKET ESCALATIONS
        </div>
        <div className="row justify-content-between">
          {Object.keys(ticketEscalations).map((escalationKey, index) => (
            <div
              className="col-lg-2"
              key={index}
            >
              <TicketEscalationsDevice
                ticketEscalations={ticketEscalations[escalationKey]}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketEscalationsContainer;
