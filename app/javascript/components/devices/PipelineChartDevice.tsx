import './PipelineChartDevice.scss';
import React from 'react';
import { Flex, Card, SectionSeparator } from 'playbook-ui';
import { pipelineData } from '../../data/PipelineData';
import PercentageChartDevice from './PercentageChartDevice';

const PipelineChartDevice = () => {
  return (
    <>
      <Card
        flex="6"
        className="device-container"
        padding="none"
        marginBottom="md"
      >
        <Flex
          align="center"
          className="pipeline-chart-header"
        >
          Pipeline Chart
        </Flex>
        <SectionSeparator />
        {pipelineData.map((metric, index) => (
          <PercentageChartDevice
            key={index}
            title={metric.title}
            count={metric.count}
            percentage={metric.percentageComplete}
          />
        ))}
      </Card>
    </>
  );
};

export default PipelineChartDevice;
