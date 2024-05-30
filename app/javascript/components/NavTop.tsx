import './NavTop.scss';
import React from 'react';
import { Nav, Title, Badge, User, Image, Flex } from 'playbook-ui';
import { getAvatarUrl } from '../services/AvatarService';

const NavTop = ({ user }) => {
  return (
    <>
      <Nav
        link="#"
        orientation="horizontal"
        variant="subtle"
        className="border-thin-bottom white"
      >
        <Flex
          justify="between"
          align="center"
          className="w-75 m-auto"
        >
          <Flex>
            <div>
              <Image
                alt="PB&J Icon"
                size="xs"
                url="/sandwich-icon.svg"
                className="mx-2"
              />
            </div>
            <Flex
              orientation="column"
              className="mt-2"
            >
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
            </Flex>
          </Flex>
          <Flex align="center">
            <Flex align="center">
              <i className="fa-regular fa-bell gray"></i>
              <Badge
                text="4"
                variant="primary"
                className="mx-2"
              />
            </Flex>
            <Flex
              align="center"
              padding="xl"
            >
              <i className="fa-solid fa-inbox gray"></i>
              <Badge
                text="2"
                variant="primary"
                className="mx-2"
              />
            </Flex>
            <Flex
              orientation="row"
              align="center"
              cursor="pointer"
              className="nav-top-user-info"
            >
              <Title
                bold={true}
                size={4}
                tag="div"
                text={user.name}
                padding="sm"
                className="font-smaller"
                cursor="hover"
              />
              <div className="nav-top-user-avatar">
                <User
                  align="right"
                  name={user.name}
                  avatarUrl={getAvatarUrl(user.id, user.gender)}
                  size="sm"
                />
              </div>
              <i className="fa-solid fa-chevron-down gray icon-xs"></i>
            </Flex>
          </Flex>
        </Flex>
      </Nav>
    </>
  );
};

export default NavTop;
