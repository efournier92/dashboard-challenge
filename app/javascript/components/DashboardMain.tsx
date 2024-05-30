import React from 'react';
import NavTop from './NavTop';
import NavMain from './NavMain';
import DashboardTitle from './DashboardTitle';
import KpiDevice from './devices/KpiDevice';
import PipelineChartDevice from './devices/PipelineChartDevice';
import TicketMetricsDevice from './devices/TicketMetricsDevice';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../services/QueryService';
import TicketEscalationsContainer from './TicketEscalationsContainer';
import { Background, Flex } from 'playbook-ui';

const DashboardMain = () => {
  const getCurrentUserQuery = useQuery(GET_USER_BY_ID, {
    variables: { id: 1 },
  });

  if (getCurrentUserQuery.loading) return <p>Loading...</p>;

  if (getCurrentUserQuery.error)
    return <p>Error : {getCurrentUserQuery.error.message}</p>;

  return (
    <>
      <NavTop user={getCurrentUserQuery.data.user} />
      <NavMain />
      <Background backgroundColor="light">
        <div className="w-100">
          <div className="w-75 m-auto">
            <DashboardTitle />
            <KpiDevice />
            <TicketEscalationsContainer />
            <Flex marginTop="sm">
              <PipelineChartDevice />
              <TicketMetricsDevice />
            </Flex>
          </div>
        </div>
      </Background>
    </>
  );
};

export default DashboardMain;
