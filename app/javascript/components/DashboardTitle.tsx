import React from 'react';
import { Title } from 'playbook-ui';

const DashboardTitle = () => {
  return (
    <>
      <div className="dashboard-title-container">
        <Title
          bold={false}
          size={1}
          tag="div"
          text="DASHBOARD"
          className="dashboard-subtitle"
        />
        <Title
          bold={false}
          size={1}
          tag="h1"
          text="Commerce Dashboard"
          className="dashboard-title"
        />
      </div>
    </>
  );
};

export default DashboardTitle;
