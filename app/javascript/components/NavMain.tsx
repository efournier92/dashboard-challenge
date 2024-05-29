import React from 'react';

import { Nav, NavItem } from 'playbook-ui';

const NavMain = () => {
  return (
    <>
      <div className="w-100 border-bottom-thin white">
        <Nav
          link="#"
          orientation="horizontal"
          className="w-75 m-auto"
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
