import React from 'react';
import { pipelineData } from '../../data/PipelineData';
import PercentageChartDevice from './PercentageChartDevice';

const PipelineChartDevice = () => {
  return (
    <>
      <div className="device-container">
        <div className="pipeline-chart-header d-flex align-items-center">
          Pipeline Chart
        </div>
        {pipelineData.map((metric, index) => (
          <PercentageChartDevice
            key={index}
            title={metric.title}
            count={metric.count}
            percentage={metric.percentageComplete}
          />
        ))}
      </div>
    </>
  );
};

export default PipelineChartDevice;
