import React from 'react';

import { Nav, Title, Badge, User, Image } from 'playbook-ui';

const NavTop = () => {
  return (
    <>
      <Nav
        link="#"
        orientation="horizontal"
        variant="subtle"
        className="border-thin-bottom white"
      >
        <div className="d-flex justify-content-between w-75 m-auto">
          <div className="d-flex">
            <div>
              <Image
                alt="PB&J Icon"
                size="xs"
                url="/sandwich-icon.svg"
                className="mx-2"
              />
            </div>
            <div className="d-flex flex-column mt-2">
              <Title
                bold={false}
                size={3}
                tag="h3"
                text="PB&J"
                className="font-light"
              />
              <Title
                bold={false}
                size={4}
                tag="div"
                color="light"
                text="INTERNATIONAL"
                className="font-subtitle"
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center px-3">
              <i className="fa-regular fa-bell gray"></i>
              <Badge
                text="4"
                variant="primary"
                className="mx-2"
              />
            </div>
            <div className="d-flex align-items-center px-3">
              <i className="fa-solid fa-inbox gray"></i>
              <Badge
                text="2"
                variant="primary"
                className="mx-2"
              />
            </div>
            <div className="d-flex align-items-center">
              <Title
                bold={true}
                size={4}
                tag="div"
                text="Indira Shree"
                className="px-2 font-smaller"
              />
              <User
                align="right"
                avatarUrl="https://randomuser.me/api/portraits/women/53.jpg"
                size="sm"
              />
              <i className="fa-solid fa-chevron-down gray icon-xs"></i>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavTop;
