import './PipelineChartDevice.scss';
import React from 'react';
import { Flex, Card } from 'playbook-ui';
import { pipelineData } from '../../data/PipelineData';
import PercentageChartDevice from './PercentageChartDevice';

const PipelineChartDevice = () => {
  return (
    <>
      <Card className="device-container">
        <Flex
          align="center"
          className="pipeline-chart-header"
        >
          Pipeline Chart
        </Flex>
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
