import React from 'react';

const PercentageChartDevice = ({ title, count, percentage }) => {
  return (
    <>
      <div className="percentage-chart-device d-flex align-items-center row border-thin-bottom">
        <span className="percentage-chart-title col-3">{title}</span>
        <span className="percentage-chart-bar-container d-inline-flex align-items-center col-7">
          <div
            className="percentage-chart-bar"
            style={{ width: `${percentage - 20}%` }}
          ></div>
          <span className="percentage-chart-label">{percentage}%</span>
        </span>
        <span className="percentage-chart-count col-1">{count}</span>
      </div>
    </>
  );
};

export default PercentageChartDevice;
