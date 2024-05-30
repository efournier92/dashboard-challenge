import './PercentageChartDevice.scss';
import React from 'react';
import { Flex, SectionSeparator } from 'playbook-ui';

const PercentageChartDevice = ({ title, count, percentage }) => {
  return (
    <>
      <Flex
        align="center"
        justify="between"
        paddingX="md"
        className="percentage-chart-device"
      >
        <Flex
          flex="2"
          className="percentage-chart-title"
        >
          {title}
        </Flex>
        <Flex
          flex="4"
          align="center"
          className="percentage-chart-bar-container"
        >
          <div
            className="percentage-chart-bar"
            style={{ width: `${percentage - 20}%` }}
          ></div>
          <span className="percentage-chart-label">{percentage}%</span>
        </Flex>
        <span className="percentage-chart-count">{count}</span>
      </Flex>
      <SectionSeparator />
    </>
  );
};

export default PercentageChartDevice;
