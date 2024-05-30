import './PercentageChartDevice.scss';
import React from 'react';
import { Flex } from 'playbook-ui';

const PercentageChartDevice = ({ title, count, percentage }) => {
  return (
    <>
      <Flex
        align="center"
        className="percentage-chart-device"
      >
        <span className="percentage-chart-title">{title}</span>
        <Flex
          inline="true"
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
    </>
  );
};

export default PercentageChartDevice;
