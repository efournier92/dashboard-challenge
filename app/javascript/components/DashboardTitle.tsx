import './DashboardTitle.scss';
import React from 'react';
import { Title, Caption } from 'playbook-ui';

const DashboardTitle = () => {
  return (
    <>
      <div className="dashboard-title-container">
        <Caption
          text="Dashboard"
          color="lighter"
        />
        <Title
          bold={false}
          size={2}
          tag="h2"
          text="Commerce Dashboard"
        />
      </div>
    </>
  );
};

export default DashboardTitle;
