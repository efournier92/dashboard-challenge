import './KpiDevice.scss';
import React from 'react';
import {
  Nav,
  NavItem,
  Title,
  CircleIconButton,
  LineGraph,
  Flex,
  Layout,
  Card,
  SectionSeparator,
} from 'playbook-ui';

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
      <Card
        padding="none"
        className="kpi-device-container"
      >
        {/* TODO: Abstract KpiTitleContainer component */}
        <Card.Body>
          <div className="kpi-title-container">
            <Flex
              justify="between"
              align="center"
              className="kpi-title-content-container w-100"
            >
              <Title
                bold={true}
                tag="div"
                size="4"
                text="Key Performance Indicators"
              />
              {/* TODO: Import custom ellipsis SVG? */}
              <CircleIconButton
                icon="ellipsis"
                variant="secondary"
              />
            </Flex>
          </div>
        </Card.Body>
        <SectionSeparator variant="card" />
        {/* <SectionSeparator /> */}
        {/* TODO: Abstract KpiNavItems container */}
        {/* <Card className="kpi-nav-items-container"> */}
        <Layout layout="content">
          <Layout.Side>
            <Nav highlight={false}>
              {/* TODO: Abstract KpiNavItem component */}
              {/* TODO: Dynamically Iterate on KpiNavItem components here */}
              <NavItem
                active
                link="#"
                className="kpi-nav-item"
              >
                <Flex justify="between">
                  <div>Revenue</div>
                  <div className="kpi-metric-color-up">
                    <i className="fa-solid fa-arrow-up mx-2"></i>
                    26%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                className="kpi-nav-item"
              >
                <Flex justify="between">
                  <div>Orders</div>
                  <div className="kpi-metric-color-down">
                    <i className="fa-solid fa-arrow-down mx-2"></i>
                    2%
                  </div>
                </Flex>
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
                <Flex justify="between">
                  <div>Average Check</div>
                  <div className="kpi-metric-color-up">
                    <i className="fa-solid fa-arrow-up mx-2"></i>
                    5%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                className="kpi-nav-item"
              >
                <Flex justify="between">
                  <div>Cancelled</div>
                  <div className="kpi-metric-color-down">
                    <i className="fa-solid fa-arrow-down mx-2"></i>
                    18%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                text="Repeat Sales"
                className="kpi-nav-item"
              />
            </Nav>
          </Layout.Side>
          {/* </Card> */}
          {/* TODO: Abstract KpiGraph component */}
          <Layout.Body>
            <LineGraph
              chartData={chartData}
              xAxisCategories={Object.keys(revenueByDate)}
              yAxisMin={0}
              yAxisMax={200000}
            />
          </Layout.Body>
        </Layout>
      </Card>
    </>
  );
};

export default KpiDevice;
