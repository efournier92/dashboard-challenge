import './NavTop.scss';
import React, { useState } from 'react';
import {
  Nav,
  Title,
  Badge,
  User,
  Image,
  Flex,
  SectionSeparator,
  Dialog,
  Button,
} from 'playbook-ui';
import { getAvatarUrl } from '../services/AvatarService';

const NavTop = ({ user }) => {
  const [isUserDialongOpen, setIsUserDialogOpen] = useState(false);
  const closeUserDialog = () => setIsUserDialogOpen(false);
  const openUserDialog = () => {
    setIsUserDialogOpen(true);
  };
  return (
    <>
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
          <div onClick={openUserDialog}>
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
          </div>
        </Flex>
      </Flex>
      <SectionSeparator />
      <Dialog
        cancelButton="Cancel Button"
        onClose={closeUserDialog}
        opened={isUserDialongOpen}
        size="md"
      >
        <Dialog.Body>
          <User
            align="center"
            orientation="vertical"
            size="lg"
            name={user.name}
            title="Employee"
            avatarUrl={getAvatarUrl(user.id, user.gender)}
          />
          <Flex
            justify="center"
            marginTop="md"
          >
            <Button onClick={closeUserDialog}>{'Close'}</Button>
          </Flex>
        </Dialog.Body>
      </Dialog>
    </>
  );
};

export default NavTop;
