import React from 'react';

import { Nav, NavItem } from 'playbook-ui';

const NavMain = () => {
  return (
    <>
      <div className="d-flex justify-content-between w-75 m-auto">
        <Nav
          link="#"
          orientation="horizontal"
        >
          <NavItem
            active
            link="#"
            text="Dashboard"
          />
          <NavItem
            link="#"
            text="Products"
          />
          <NavItem
            link="#"
            text="In Progress"
          />
          <NavItem
            link="#"
            text="Settings"
          />
        </Nav>
      </div>
    </>
  );
};

export default NavMain;
