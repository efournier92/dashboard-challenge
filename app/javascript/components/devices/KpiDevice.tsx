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
          <Flex
            justify="between"
            align="center"
            className="kpi-title-content-container w-100"
            margin="none"
          >
            <Title
              size={4}
              text="Key Performance Indicators"
              truncate="1"
            />
            {/* TODO: Import custom ellipsis SVG? */}
            <CircleIconButton
              icon="ellipsis"
              variant="secondary"
            />
          </Flex>
        </Card.Body>
        <SectionSeparator variant="card" />
        {/* <SectionSeparator /> */}
        {/* TODO: Abstract KpiNavItems container */}
        <Layout>
          <Layout.Side flex="2">
            <Nav highlight={false}>
              {/* TODO: Abstract KpiNavItem component */}
              {/* TODO: Dynamically Iterate on KpiNavItem components here */}
              <NavItem
                active
                link="#"
                paddingY="md"
              >
                <Flex justify="between">
                  <b>Revenue</b>
                  <div className="kpi-metric-color-up">
                    <i className="fa-solid fa-arrow-up arrow-icon"></i>
                    26%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                paddingY="md"
              >
                <Flex justify="between">
                  <b>Orders</b>
                  <div className="kpi-metric-color-down">
                    <i className="fa-solid fa-arrow-down arrow-icon"></i>
                    2%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                paddingY="md"
              >
                <Flex justify="between">
                  <b>Profit</b>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                paddingY="md"
              >
                <Flex justify="between">
                  <b>Average Check</b>
                  <div className="kpi-metric-color-up">
                    <i className="fa-solid fa-arrow-up arrow-icon"></i>
                    5%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                paddingY="md"
              >
                <Flex justify="between">
                  <b>Cancelled</b>
                  <div className="kpi-metric-color-down">
                    <i className="fa-solid fa-arrow-down arrow-icon"></i>
                    18%
                  </div>
                </Flex>
              </NavItem>
              <NavItem
                link="#"
                paddingY="md"
              >
                <Flex justify="between">
                  <b>Repeat Sales</b>
                </Flex>
              </NavItem>
            </Nav>
          </Layout.Side>
          {/* TODO: Abstract KpiGraph component */}
          <Layout.Body marginTop="xl">
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
