import React from 'react';
import { Nav, NavItem, Title, CircleIconButton, LineGraph } from 'playbook-ui';

const KpiDevice = () => {
  const revenueByDate = {
    '5/1': 43934,
    '5/15': 48218,
    '6/1': 52503,
    '6/15': 54840,
    '7/1': 57177,
    '7/15': 63417,
    '8/1': 69658,
    '8/15': 83344,
    '9/1': 97031,
    '9/15': 108481,
    '10/1': 119931,
    '10/15': 128532,
    '11/1': 150000,
    '11/15': 165000,
    '12/1': 180000,
    '12/15': 200000,
  };

  const chartData = [
    {
      name: 'Revenue',
      data: Object.values(revenueByDate),
    },
  ];

  return (
    <>
      <div className="device-container">
        {/* TODO: Abstract KpiTitleContainer component */}
        <div className="kpi-title-container">
          <Nav
            link="#"
            orientation="horizontal"
          >
            <div className="kpi-title-content-container d-flex w-100 justify-content-between align-items-center">
              <Title
                bold={true}
                tag="h6"
                text="Key Performance Indicators"
                className="kpi-title"
              />
              {/* TODO: Import custom ellipsis SVG? */}
              <CircleIconButton
                icon="ellipsis"
                variant="secondary"
              />
            </div>
          </Nav>
        </div>
        <div className="row">
          {/* TODO: Abstract KpiNavItems container */}
          <div className="col-lg-3 kpi-nav-items-container">
            <Nav highlight={false}>
              {/* TODO: Abstract KpiNavItem component */}
              {/* TODO: Dynamically Iterate on KpiNavItem components here */}
              <NavItem
                active
                link="#"
                className="kpi-nav-item"
              >
                <div className="d-flex justify-content-between">
                  <div>Revenue</div>
                  <div className="kpi-metric-color-up">
                    <i className="fa-solid fa-arrow-up mx-2"></i>
                    26%
                  </div>
                </div>
              </NavItem>
              <NavItem
                link="#"
                className="kpi-nav-item"
              >
                <div className="d-flex justify-content-between">
                  <div>Orders</div>
                  <div className="kpi-metric-color-down">
                    <i className="fa-solid fa-arrow-down mx-2"></i>
                    2%
                  </div>
                </div>
              </NavItem>
              <NavItem
                link="#"
                text="Profit"
                className="kpi-nav-item"
              />
              <NavItem
                link="#"
                className="kpi-nav-item"
              >
                <div className="d-flex justify-content-between">
                  <div>Average Check</div>
                  <div className="kpi-metric-color-up">
                    <i className="fa-solid fa-arrow-up mx-2"></i>
                    5%
                  </div>
                </div>
              </NavItem>
              <NavItem
                link="#"
                className="kpi-nav-item"
              >
                <div className="d-flex justify-content-between">
                  <div>Cancelled</div>
                  <div className="kpi-metric-color-down">
                    <i className="fa-solid fa-arrow-down mx-2"></i>
                    18%
                  </div>
                </div>
              </NavItem>
              <NavItem
                link="#"
                text="Repeat Sales"
                className="kpi-nav-item"
              />
            </Nav>
          </div>
          {/* TODO: Abstract KpiGraph component */}
          <div className="col-lg-9 kpi-graph-container">
            <LineGraph
              chartData={chartData}
              xAxisCategories={Object.keys(revenueByDate)}
              yAxisMin={0}
              yAxisMax={200000}
              height="35%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KpiDevice;
