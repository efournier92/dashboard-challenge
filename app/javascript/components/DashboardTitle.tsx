import React from 'react';
import { Title } from 'playbook-ui';

const DashboardTitle = () => {
  return (
    <>
      <div className="dashboard-title-container w-100">
        <div className="w-75 m-auto">
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
      </div>
    </>
  );
};

export default DashboardTitle;
