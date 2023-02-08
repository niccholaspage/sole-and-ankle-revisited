/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile Menu">
          <CloseButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" />
          </CloseButton>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
      </Content>
    </Overlay>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  font-size: 0.875rem;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-top: 32px;
  margin-right: 22px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: hsla(var(--solo-color-gray-700) / 0.8);
  height: 100%;
`;

const Content = styled.div`
  background-color: hsl(0deg 100% 100%);
  width: 80%;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  justify-content: space-between;
  height: 100%;
  font-size: 1.125rem;
  color: var(--color-gray-300);

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-transform: uppercase;
`;

export default MobileMenu;
